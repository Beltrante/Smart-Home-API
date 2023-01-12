import { MeteoState } from '../model/meteo.js';
export class PhotovoltaicPanels{

    constructor(numberPanels, energyPanel){
        // Maximum energy produced in kwh 
        this.maxEnergyProduced = numberPanels * energyPanel;
        this.currentOutput = this.maxEnergyProduced;
    }

    // Compute the energy in kwh given the meteo as input
    computeEnergyOutput(meteo){
        let coverage
        if(meteo.state == MeteoState.sunny){
            coverage = 1
        }
        else if(meteo.state == MeteoState.cloudy){
            coverage = 0.3
        }
        else {
            coverage = 0.1
        }

        this.currentOutput = coverage * this.maxEnergyProduced
    }

}
