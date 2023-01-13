import express from 'express';
import home from '../model/home.js';

const router = new express.Router();

router.get('/batteries', (req, res) => {

    res
        .status(200)
        .send({
            capacity: home.battery.capacity,
            unitOfMeasure: 'kWh'
        })
        .end();
});


router.get('/batteries/reset', (req, res) => {

    home.battery.reset

    res
        .status(200)
        .send({
            message: 'Batteries capacity equal to zero'
        })
        .end();
});

export default router;
