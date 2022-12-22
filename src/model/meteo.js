
const MeteoState = {
    sunny: "Sunny",
    cloudy: "Cloudy",
    rainy: "Rainy",
}

export class Meteo{
    
    constructor(){
        let random = Math.random();
        if(random < 0.5){
            this.state = MeteoState.sunny
        }
        else if(random <0.8){
            this.state = MeteoState.cloudy
        }
        else{
            this.state = MeteoState.rainy
        }
    }

    // Return a new meteo state 
    change(){
        console.log(this.state)
        let random = Math.random();
        switch(this.state){
            case MeteoState.sunny:
                if(random < 0.6){
                    this.state = MeteoState.sunny
                }
                else if (random < 0.95){
                    this.state = MeteoState.cloudy
                }
                else {
                    this. state = MeteoState.rainy
                }
                break;
            case MeteoState.cloudy:
                if(random < 0.3){
                    this.state = MeteoState.sunny
                }
                else if (random < 0.65){
                    this.state = MeteoState.cloudy
                }
                else {
                    this. state = MeteoState.rainy
                }
                break;
            case MeteoState.rainy:
                if(random < 0.05){
                    this.state = MeteoState.sunny
                }
                else if (random < 0.55){
                    this.state = MeteoState.cloudy
                }
                else {
                    this. state = MeteoState.rainy
                }
                break;
        }
    }

}
