
export class Battery{

    constructor(capacity, increment, decrement){
        this.capacity = capacity;
        this.increment = increment;
        this.decrement = decrement;
    }


    incrementCapacity() {
        this.capacity = this.capacity + this.increment;
    }

    decrementCapacity() {
        this.capacity = this.capacity - this.decrement < 0 ? 0
            : this.capacity - this.decrement;
    }

    randomStatus() {

        let randomChoice = Math.random() < 0.5;

        if (randomChoice) {
            this.incrementCapacity()
        } else {
            this.decrementCapacity()
        }
    }

}
