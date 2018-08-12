import * as CryptoJS from "crypto-js"

class Block {
  public index: number
  public hash: string
  public previousHash: string
  public data: string
  public timestamp: number

  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString()

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index
    this.hash = hash
    this.previousHash = previousHash
    this.data = data
    this.timestamp = timestamp
  }
}

Block.calculateBlockHash

const genesisBlock: Block = new Block(
  0,
  "2CF24DBA5FB0A30E26E83B2AC5B9E29E1B161E5C1FA7425E73043362938B9824",
  "D3CEC99112255DB9BF4963F7798562B6A36F1BD0B2016918629E007D474DEB70",
  "hello",
  1533991463
)

let blockchain: Block[] = [genesisBlock]

const getBlockchain = (): Block[] => blockchain

const getLatestBlock = (): Block => blockchain[blockchain.length - 1]

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000)

const crateNewBlock = (data: string): Block => {
  const previosBlock: Block = getLatestBlock()
  const newIndex: number = previosBlock.index + 1
  const newTimestamp: number = getNewTimeStamp()
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previosBlock.hash,
    newTimestamp,
    data
  )
  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previosBlock.hash,
    data,
    newTimestamp
  )

  return newBlock
}

console.log(crateNewBlock("hello"), crateNewBlock("bye bye"))

export {}
