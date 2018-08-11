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
    ){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock:Block = new Block(
    0, "2CF24DBA5FB0A30E26E83B2AC5B9E29E1B161E5C1FA7425E73043362938B9824", 
    "D3CEC99112255DB9BF4963F7798562B6A36F1BD0B2016918629E007D474DEB70",
    "hello",
    1533991463
)

let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

export {};