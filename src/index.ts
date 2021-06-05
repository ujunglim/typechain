// block structure
class Block {
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
let blockchain:[Block] = [genesisBlock];

console.log(blockchain);

export {};