
export class Battery{

    // capacity is the current value of the batteries in kw,
    // maximum capacity is the maximum capacity that the battery can store in kw
    constructor(capacity, maximumCapacity){
        this.capacity = capacity;
        this.maximumCapacity = maximumCapacity;
    }

    incrementCapacity(increment){
        if(this.capacity + increment <= this.maximumCapacity){
            this.capacity = this.capacity + increment
        }
        else this.capacity = this.maximumCapacity
    }

    // Decrement the capacity and return kw was not able to serve
    decrementCapacity(decrement){
        if(this.capacity - decrement < 0){
            this.capacity = 0
            return decrement - this.capacity
        }
        else {
            this.capacity = this.capacity - decrement
            return 0
        }
    }

    reset(){
        this.capacity = 0
    }

}
