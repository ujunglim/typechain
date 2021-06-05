import *as CryptoJS from "crypto-js";

// block structure
class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  static calculateBlockHash = (
    index: number,
    previousHash: string,
    data: string,
    timestamp: number
  ):string => CryptoJS.SHA256(index + previousHash + data + timestamp).toString();

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

// create block
const genesisBlock:Block = new Block(0, "sfsfsd", "", "Hello", 123456);

// create blockchain
let blockchain:Block[] = [genesisBlock];

// get length of blockchain, return array of Block
const getBlockchain = ():Block[] => blockchain;
// return latest block in blockchain
const getLatestBlock = ():Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = ():number => Math.round(new Date().getTime() / 1000);
export {};