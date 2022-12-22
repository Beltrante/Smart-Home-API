import {Battery} from '../model/battery.js';
import { Appliance } from '../model/appliance.js';

class Home {
    constructor(){
        this.battery = new Battery(10,10,1)
        this.appliances = [
            new Appliance("dishwasher", 1.2), 
            new Appliance("washingmachine", 5.6)]
    }

    // Return the appliance with the rispective name passed as parameter.
    // Return null if no appliace is found
    getAppliance(name){
        for(let i = 0; i < this.appliances.length; i++){
            if(name == this.appliances[i].name){
                return this.appliances[i];
            }
        }
        return null;
    }
}

const home = new Home();
export default home;