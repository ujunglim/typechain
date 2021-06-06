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

// create new block
const createNewBlock = (data:string):Block => {
  const previousBlock:Block = getLatestBlock();
  // get new index
  const newIndex:number = getLatestBlock().index + 1; 
  // get new timestamp
  const newTimestamp:number = getNewTimeStamp();
  // create new hash
  const newHash:string = Block.calculateBlockHash(newIndex, previousBlock.hash, data, newTimestamp);
  // create new block
  const newBlock:Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);

  return newBlock;
}

console.log(createNewBlock("hello"), createNewBlock("bye bye"))

export {};