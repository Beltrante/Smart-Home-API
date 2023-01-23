import express from 'express';
import home from '../model/home.js';

const router = new express.Router();

router.get('/home', (req, res) => {
    res
        .status(200)
        .send({
            meteo : home.meteo.state,
            battery : home.battery.capacity,
            greenEnergyTotal: home.greenEnergyConsumed,
            notGreenEnergyTotal: home.notGreenEnergyConsumed,
            totalGrade: home.totalGrade,
            currentGrade: home.currentGrade,
            panel: home.photovoltaicPanels.currentOutput,
            applicances : home.appliances
        })
        .end();
});

router.send('/home/simulate', (req, res) => {
    home.simulate()
    res
        .status(200)
        .json({
            meteo : home.meteo.state,
            battery : home.battery.capacity,
            greenEnergyTotal: home.greenEnergyConsumed,
            notGreenEnergyTotal: home.notGreenEnergyConsumed,
            totalGrade: home.totalGrade,
            currentGrade: home.currentGrade,
            panel: home.photovoltaicPanels.currentOutput,
            applicances : home.appliances
        })
        .end();
});

export default router;