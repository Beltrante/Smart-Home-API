import express from 'express';
import home from '../model/home.js';

const router = new express.Router();

router.get('/panels', (req, res) => {
    res
        .status(200)
        .send({
            status: "OK",
        })
        .end();
});

router.get('/panels/output', (req, res) => {
    home.photovoltaicPanels.computeEnergyOutput(home.meteo)
    res
        .status(200)
        .send({
            output: home.photovoltaicPanels.currentOutput,
        })
        .end();
});

export default router;
