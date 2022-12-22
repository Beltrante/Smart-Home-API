export class Appliance{

    constructor(name){
        this.isOn = false
        this.name = name;
    }



}


export class DishWasher extends Appliance{
    constructor(name){
        super();
        this.name = name
    }

}

export class WashingMachine extends Appliance{
    constructor(name){
        super();
        this.name = name
    }

}

