const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

function getHash(input) {
    return sha256(utf8ToBytes(input));
}

function compareHashes(rainbowTableHash, hash) {
    return toHex(rainbowTableHash) === toHex(hash);
}

// given a hash, return the color that created the hash
function findColor(hash) {
    return COLORS.find((color => compareHashes(hash, getHash(color))));
}

module.exports = findColor;
