import { LyraApi } from "../lyra-api";
import { LyraCrypto } from "../lyra-crypto";

const stringify = require("../../my-json-stringify");
var JSONbig = require("json-bigint");

export class DealMessage {
  PrevHash: string;
  TimeStamp: string;
  TradeId: string;
  AccountId: string;

  constructor(messageData: string | undefined) {
    if (messageData === undefined) {
      this.TimeStamp = new Date().toISOString();
      this.PrevHash = "";
      this.TradeId = "";
      this.AccountId = "";
    } else {
      const decodedBlockData = JSON.parse(messageData);
      this.TimeStamp = decodedBlockData.TimeStamp;
      this.PrevHash = decodedBlockData.PrevHash;
      this.TradeId = decodedBlockData.TradeId;
      this.AccountId = decodedBlockData.AccountId;
    }
  }

  toJson(wallet: LyraApi): string {
    var json = stringify(this);
    console.log("json to hash:", json);

    var hash = LyraCrypto.Hash(json);
    const signature = wallet.sign(hash);
    //console.log(`Hash is: ${hash} and signature is ${signature}`);
    var finalBlock = {
      ...this,
      Signature: signature,
      Hash: hash
    };
    //var finalJson = JSON.stringify(finalBlock);
    const finalJson = JSONbig.stringify(finalBlock);
    console.log("final block:", finalJson);
    return finalJson;
  }
}

export class SignedMessage extends DealMessage {
  Hash: string;
  Signature: string;
  constructor(messageData: string | undefined) {
    super(messageData);
    if (messageData === undefined) {
      throw new Error("messageData is undefined. should not happen.");
    } else {
      const decodedBlockData = JSON.parse(messageData);
      this.Hash = decodedBlockData.Hash;
      this.Signature = decodedBlockData.Signature;
    }
  }
}
