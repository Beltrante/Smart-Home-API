import express from 'express';
import home from '../model/home.js';
import { MeteoState } from '../model/meteo.js';

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

router.get('/meteo/sunny', (req, res) => {
    home.meteo.setWeather(MeteoState.sunny);
    res
        .status(200)
        .send({
            meteo : home.meteo.state
        })
        .end();
});

router.get('/meteo/cloudy', (req, res) => {
    home.meteo.setWeather(MeteoState.cloudy);
    res
        .status(200)
        .send({
            meteo : home.meteo.state
        })
        .end();
});

router.get('/meteo/rainy', (req, res) => {
    home.meteo.setWeather(MeteoState.rainy);
    res
        .status(200)
        .send({
            meteo : home.meteo.state
        })
        .end();
});

export default router;