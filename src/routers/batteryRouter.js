import express from 'express';
import{Battery} from '../model/battery.js';

const battery = new Battery(10,10,1);
const router = new express.Router();

router.get('/batteries', (req, res) => {

    battery.randomStatus

    res
        .status(200)
        .send({
            capacity: battery.capacity,
            unitOfMeasure: 'kWh'
        })
        .end();
});

router.get('/reset_all', (req, res) => {

    battery.capacity = 0;

    res
        .status(200)
        .send({
            message: 'Batteries capacity equal to zero'
        })
        .end();
});

export default router;