const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = []
const blocks = [];

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction, 
    mine, 
    blocks,
    mempool
};

function hashTheBlock(block) {
    return SHA256(JSON.stringify(block))
}

function addTransaction(transaction) {
    mempool.push(transaction)
}

function addTransactionsToTheBlock(mempool) {
    let transactions = [];

    while (transactions.length < MAX_TRANSACTIONS && mempool.length) {
        transactions.push(mempool.pop())
    }

    return transactions;
}

function calculateTheNonce(block) {
    block.nonce = 0;
    block.hash = hashTheBlock(block)

    while(BigInt(`0x${block.hash}`) >= TARGET_DIFFICULTY) {
        block.nonce += 1;
        block.hash = hashTheBlock(block)
    }

    return block
}

function mine() {
    const block = {
        id: blocks.length,
    }
    block.transactions = addTransactionsToTheBlock(mempool)
    blocks.push(calculateTheNonce(block))
}
