import {Battery} from '../model/battery.js';
import { Appliance } from '../model/appliance.js';
import { Meteo } from '../model/meteo.js';
import { PhotovoltaicPanels } from '../model/photovoltaicPanels.js';

class Home {
    
    constructor(){
        this.battery = new Battery(1,10,0.01,0.01)
        this.meteo = new Meteo()
        this.appliances = [
            new Appliance("dishwasher", 1.2), 
            new Appliance("washingmachine", 5.6),
            new Appliance("vacuumcleaner", 0.8),
            new Appliance("television", 0.12),
        ]
        this.photovoltaicPanels = new PhotovoltaicPanels(18,0.25)
    }

    // Return the most consuming appliance in real time.
    // Return null if any appliances are consuming
    getMostConsumingAppliance(){
        let index = 0;
        let current = 0;
        let max = 0;
        for(let i = 0; i < this.appliances.length; i++){
            current = this.appliances[i].realTimeConsume()    
            if(current > max){
                max = current
                index = i
            }
        }
        if(max == 0) return null;
        return this.appliances[index]
    }

    

    // Return the appliance with the rispective name passed as parameter.
    // Return null if no appliace is found.
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