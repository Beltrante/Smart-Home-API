import {Battery} from '../model/battery.js';

class Home {
    constructor(){
        this.battery = new Battery(10,10,1)
    }
}

const home = new Home();
export default home;