import {Battery} from '../model/battery.js';
import { Appliance } from '../model/appliance.js';
import { Meteo } from '../model/meteo.js';
import { PhotovoltaicPanels } from '../model/photovoltaicPanels.js';

class Home {

    constructor(){
        // Counters
        this.greenEnergyConsumed = 0
        this.notGreenEnergyConsumed = 0

        // Behaviour grades (current = 1h simulation)
        this.totalGrade = 100
        this.currentGrade = 100

        this.simulatedHours = 0
        this.simulatedGradeSum = 0

        // External Phenomena
        this.meteo = new Meteo()

        // House Structure
        this.battery = new Battery(0,10)
        this.appliances = [
            // TODO modify name with dialogflow intents
            new Appliance("airconditioner",3),
            new Appliance("dehumidifier", 0.07),
            // Consume heating 10 L of water
            new Appliance("cooker", 1.04),
            new Appliance("dishwasher", 1.2),
            new Appliance("dryer",3.5),
            new Appliance("boiler",24),
            new Appliance("oven", 2.3),
            new Appliance("washingmachine", 1.3),
        ]
        this.photovoltaicPanels = new PhotovoltaicPanels(18,0.35)
    }

    reset(){
        this.greenEnergyConsumed = 0
        this.notGreenEnergyConsumed = 0

        // Behaviour grades (current = 1h simulation)
        this.totalGrade = 100
        this.currentGrade = 100

        // External Phenomena
        this.meteo = new Meteo()

        // House Structure
        this.battery = new Battery(0,10)
        this.appliances = [
            // TODO modify name with dialogflow intents
            new Appliance("airconditioner",3),
            new Appliance("dehumidifier", 0.07),
            // Consume heating 10 L of water
            new Appliance("cooker", 1.04),
            new Appliance("dishwasher", 1.2),
            new Appliance("dryer",3.5),
            new Appliance("boiler",24),
            new Appliance("oven", 2.3),
            new Appliance("washingmachine", 1.3),
        ]
        this.photovoltaicPanels = new PhotovoltaicPanels(18,0.35)
    }

    /// Simulate one hour
    simulate(){

        let energy = this.photovoltaicPanels.currentOutput
        let greenEnergy = 0
        let notGreenEnergy = 0
        let energyConsumed = this.getCurrentAppliancesConsume()

        energy = energy - energyConsumed

        if(energy < 0){
            let delta = this.battery.decrementCapacity(Math.abs(energy))
            if(delta != 0){
                greenEnergy = energyConsumed - delta
                notGreenEnergy = energyConsumed + delta
            }
            else {
                greenEnergy = energyConsumed
                notGreenEnergy = 0
            }
        }
        else{
            this.battery.incrementCapacity(energy)
            greenEnergy = energyConsumed
            notGreenEnergy = 0
        }
        this.greenEnergyConsumed = this.greenEnergyConsumed + greenEnergy
        this.notGreenEnergyConsumed = this.notGreenEnergyConsumed + notGreenEnergy

        this.currentGrade = this.rateCurrentBehaviour(greenEnergy,notGreenEnergy)
        this.totalGrade = this.rateTotalBehaviour()
        this.meteo.change()
        this.photovoltaicPanels.computeEnergyOutput(this.meteo)
    }

    //

    rateCurrentBehaviour(greenEnergy, notGreenEnergy){
        if(greenEnergy + notGreenEnergy == 0 ) return 100
        return (greenEnergy/(greenEnergy + notGreenEnergy)) * 100
    }

    rateTotalBehaviour(){
        this.simulatedHours = this.simulatedHours + 1
        this.simulatedGradeSum = this.simulatedGradeSum + this.currentGrade
        return this.simulatedGradeSum/this.simulatedHours
    }

    getCurrentAppliancesConsume(){
        let applicanesEnergy = 0
        for(let i = 0; i < this.appliances.length; i++){
            applicanesEnergy = applicanesEnergy + this.appliances[i].realTimeConsume()
        }
        return applicanesEnergy;
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
