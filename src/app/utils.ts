import { HTTPError } from "ky-universal";
import { APIResult } from "./blockchain/blocks/meta";

export const extractStreamData = async (
  stream: ReadableStream
): Promise<string> => {
  const reader = stream.getReader();
  let data = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    if (value) data += new TextDecoder().decode(value);
  }
  return data;
};

export const dumpHttpError = async (error: any): Promise<void> => {
  if (error instanceof HTTPError) {
    console.log("http error", error.response);
    const streamData = await extractStreamData(error.response.body!);
    console.log("Stream data:", streamData);
    console.log("Request headers:");
    error.request.headers.forEach((value: string, name: string) => {
      console.log(`${name}: ${value}`);
    });
    console.log("Response headers:");
    error.response.headers.forEach((value: string, name: string) => {
      console.log(`${name}: ${value}`);
    });
  }
};

export type AnyPromise = Promise<any>;
export interface LongRunTask {
  promise: (input: any) => AnyPromise;
  callback: ((result: any) => void) | null;
  name: string;
  description: string;
  initialInput?: any;
}

export function BatchRunLongRunTask(
  input: any,
  promises: LongRunTask[],
  progressCallback: ((index: number, total: number) => void) | null = null
): Promise<any> {
  return promises
    .reduce((chain, { promise, callback, name, description }, index) => {
      return chain
        .then((result) => {
          console.log(
            `Promise "${name}" started, previous result is ${result}`
          );
          // Call progress callback with current index and total number of Promises
          if (progressCallback) {
            progressCallback(index + 1, promises.length);
          }
          // Call callback function with result if provided
          if (callback) {
            callback(result);
          }
          console.log(`Promise "${name}" resolved`);
          return promise(result);
        })
        .catch((error) => {
          // Handle error and reject the chain
          console.error(`Error in Promise "${name}": ${error}`);
          return Promise.reject(error);
        });
    }, Promise.resolve(input))
    .then((result) => {
      console.log("All promises resolved. final result is ", result);
      // Return the final result of the last promise in the chain
      return result;
    });
}

const promises: LongRunTask[] = [
  {
    promise: () =>
      new Promise<APIResult>((resolve) =>
        setTimeout(() => {
          console.log("Promise 1 resolved");
          resolve(new APIResult());
        }, 1000)
      ),
    callback: null,
    name: "Promise 1",
    description: "Wait 1 second"
  },
  {
    promise: () =>
      new Promise<APIResult>((resolve, reject) =>
        setTimeout(() => {
          console.log("Promise 2 rejected");
          reject(new Error("Promise 2 error"));
        }, 2000)
      ),
    callback: null,
    name: "Promise 2",
    description: "Wait 2 seconds and reject with an error"
  }
];

export interface NeedRunTask {
  onStart?: (init: any, promises: LongRunTask[]) => void;
}

// BatchRunLongRunTask(promises, (index, total) => {
//   console.log(`Completed ${index} of ${total} promises`);
// })
//   .then(() => console.log("All promises resolved"))
//   .catch((error) => console.error(`Error in batch: ${error}`));
