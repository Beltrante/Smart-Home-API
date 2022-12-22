import express from 'express';
import home from '../model/home.js';

const router = new express.Router();

router.get('/appliances/:name', (req, res) => {
    const name = req.params.name;
    const appliance = home.getAppliance(name)
    if(appliance == null){
        res.status(404)
        .send({
            message: 'No appliance with name = ' + name
        })
    }
    else{
        res
        .status(200)
        .send({
            name: home.appliances[0].name,
            unitOfMeasure: 'kWh'
        })
        .end();
    }
});

router.get('/appliances', (req, res) => {

    res
        .status(200)
        .send({
            name: home.appliances[0].name,
            unitOfMeasure: 'kWh'
        })
        .end();
});

export default router;