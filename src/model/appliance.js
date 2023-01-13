export class Appliance{

    constructor(name,consume){
        this.isOn = false
        this.name = name;
        this.consume = consume;
    }

    turnOn(){
        this.isOn = true;
    }

    turnOff(){
        this.isOn = false;
    }

    realTimeConsume(){
        if(this.isOn) return this.consume;
        else return 0;
    }


}

