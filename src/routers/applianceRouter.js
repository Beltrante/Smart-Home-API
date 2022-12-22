import express from 'express';
import home from '../model/home.js';

const router = new express.Router();

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