"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock = new Block(0, "2CF24DBA5FB0A30E26E83B2AC5B9E29E1B161E5C1FA7425E73043362938B9824", "D3CEC99112255DB9BF4963F7798562B6A36F1BD0B2016918629E007D474DEB70", "hello", 1533991463);
let blockchain = [genesisBlock];
console.log(blockchain);
//# sourceMappingURL=index.js.map