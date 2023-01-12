import express from 'express';
import home from '../model/home.js';

const router = new express.Router();

router.get('/home', (req, res) => {
    res
        .status(200)
        .send({
            meteo : home.meteo.state,
            battery : home.battery.capacity,
            panel: home.photovoltaicPanels.currentOutput,
            applicances : home.appliances
        })
        .end();
});

export default router;