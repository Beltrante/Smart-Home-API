import express from 'express';
import home from '../model/home.js';

const router = new express.Router();


router.get('/batteries', (req, res) => {

    home.battery.randomStatus()

    res
        .status(200)
        .send({
            capacity: home.battery.capacity,
            unitOfMeasure: 'kWh'
        })
        .end();
});

router.get('/reset_all', (req, res) => {

    home.battery.capacity = 0;

    res
        .status(200)
        .send({
            message: 'Batteries capacity equal to zero'
        })
        .end();
});

export default router;
