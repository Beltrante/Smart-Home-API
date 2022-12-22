import express from 'express';
import home from '../model/home.js';

const router = new express.Router();

router.get('/meteo', (req, res) => {
    res
        .status(200)
        .send({
            meteo : home.meteo.state
        })
        .end();
});

router.get('/meteo/change', (req, res) => {
    home.meteo.change()
    res
        .status(200)
        .send({
            meteo : home.meteo.state
        })
        .end();
});

export default router;