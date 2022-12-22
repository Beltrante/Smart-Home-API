import {Battery} from '../model/battery.js';
import { DishWasher } from '../model/appliance.js';
import { WashingMachine } from '../model/appliance.js';

class Home {
    constructor(){
        this.battery = new Battery(10,10,1)
        this.appliances = [new DishWasher("dishwasher"), new WashingMachine("washingmachine")]
    }
}

const home = new Home();
export default home;