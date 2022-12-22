import express from 'express';
import home from '../model/home.js';

const router = new express.Router();

router.get('/appliances', (req, res) => {
    var jsonArr = [];

    for (var i = 0; i < home.appliances.length; i++) {
        jsonArr.push({
            name: home.appliances[i].name,
            isOn: home.appliances[i].isOn,
            consume: home.appliances[i].consume,
            realTimeConsume: home.appliances[i].realTimeConsume(),
            unitOfMeasure: 'kWh'
        });
    }

    res
        .status(200)
        .send({
            appliances: jsonArr,
        })
        .end();
});

router.get('/appliances/name=:name', (req, res) => {
    const name = req.params.name;
    const appliance = home.getAppliance(name)
    if(appliance == null){
        res.status(404)
        .send({
            message: 'No appliance with name ' + name
        })
    }
    else{
        res
        .status(200)
        .send({
            name: appliance.name,
            isOn: appliance.isOn,
            consume: appliance.consume,
            realTimeConsume: appliance.realTimeConsume(),
            unitOfMeasure: 'kWh'
        })
        .end();
    }
});

router.get('/appliances/turnOn/name=:name', (req, res) => {
    const name = req.params.name;
    const appliance = home.getAppliance(name)
    if(appliance == null){
        res.status(404)
        .send({
            message: 'No appliance with name ' + name
        })
    }
    else{
        appliance.turnOn();
        res
        .status(200)
        .send({
            message: "Appliance " + name + " is turned on"
        })
        .end();
    }
});

router.get('/appliances/turnOff/name=:name', (req, res) => {
    const name = req.params.name;
    const appliance = home.getAppliance(name)
    if(appliance == null){
        res.status(404)
        .send({
            message: 'No appliance with name ' + name
        })
    }
    else{
        appliance.turnOff();
        res
        .status(200)
        .send({
            message: "Appliance " + name + " is turned off"
        })
        .end();
    }
});

router.get('/appliances/mostConsuming', (req, res) => {
    const appliance = home.getMostConsumingAppliance()
    if(appliance == null){
        res.status(404)
        .send({
            message: 'No appliance is consuming right now'
        })
    }
    else{
        res
        .status(200)
        .send({
            name: appliance.name,
            isOn: appliance.isOn,
            consume: appliance.consume,
            realTimeConsume: appliance.realTimeConsume(),
            unitOfMeasure: 'kWh'
        })
        .end();
    }
});

export default router;