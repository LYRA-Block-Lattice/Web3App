import { HTTPError } from "ky-universal";

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
    for (const [name, value] of error.request.headers.entries()) {
      console.log(`${name}: ${value}`);
    }
    console.log("Response headers:");
    for (const [name, value] of error.response.headers.entries()) {
      console.log(`${name}: ${value}`);
    }
  }
};
