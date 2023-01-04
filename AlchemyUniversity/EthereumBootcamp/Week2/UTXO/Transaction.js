class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.inputUTXOs = inputUTXOs;
        this.outputUTXOs = outputUTXOs;
    }
    execute() {
        if (this.inputUTXOs.some((utxo) => utxo.spent)) {
            throw new Error("Some UTXO its expended");
        }
        const totalinputUTXOsValue = this.inputUTXOs.reduce(
            (totalValue, utxo) => totalValue + utxo.amount,
            0
        );
        const totaloutputUTXOsvalue = this.outputUTXOs.reduce(
            (totalValue, utxo) => totalValue + utxo.amount,
            0
        );
        if (totaloutputUTXOsvalue > totalinputUTXOsValue) {
            throw new Error("The output Value its greater than the input Value")
        }
        this.inputUTXOs.forEach( utxo => utxo.spend())
        this.fee = totalinputUTXOsValue - totaloutputUTXOsvalue;
    }
}

module.exports = Transaction;
