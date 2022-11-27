const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [ new Block('GENESIS') ];
    }

    addBlock(block) {
        block.previousHash = this.chain[this.chain.length -1].toHash()
        this.chain.push(block)
    }

    isValid() {
        for(let i=this.chain.length-1; i>0; i--){
            if(this.chain[i].previousHash.toString() !== this.chain[i-1].toHash().toString()){
                return false
            } 
        }
        return true
    }
}

module.exports = Blockchain;
