import *as CryptoJS from "crypto-js";

// block class structure
class Block {
  // calculate hash of block
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    data: string,
    timestamp: number
  ):string => CryptoJS.SHA256(index + previousHash + data + timestamp).toString();

  // check the structure of block is valid or not
  static validateStructure = (aBlock:Block):boolean => 
    typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.data === "string" &&
    typeof aBlock.timestamp === "number"
    
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;
  
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

  // add new block to blockchain
  addBlock(newBlock);

  return newBlock;
}

// get hash of block
const getHashforBlock = (aBlock:Block):string => 
  Block.calculateBlockHash(
    aBlock.index,  
    aBlock.previousHash,
    aBlock.data,
    aBlock.timestamp);

// check block struture is valid or not
const isBlockValid = (candidateBlock:Block, previousBlock:Block):boolean => {
  // check block structure
  if(!Block.validateStructure(candidateBlock)) {
    return false;
  } // check index
  else if (previousBlock.index + 1 !== candidateBlock.index) {
    return false;
  } // check hash
  else if (previousBlock.hash !== candidateBlock.previousHash) {
    return false;
  } // check hash calculation
  else if(getHashforBlock(candidateBlock) !== candidateBlock.hash) {
    return false;
  }
  else return true;
  
}

// add block to blockchain
const addBlock = (candidateBlock:Block):void => {
  if(isBlockValid(candidateBlock, getLatestBlock())) {
    blockchain.push(candidateBlock);
  }
}

// test
createNewBlock("2 block");
createNewBlock("3 block");
createNewBlock("4 block");
createNewBlock("5 block");

console.log(blockchain);

export {};