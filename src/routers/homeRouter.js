import express from 'express';
import home from '../model/home.js';

const router = new express.Router();

router.get('/home', (req, res) => {
    res
        .status(200)
        .send({
            status: "OK",
        })
        .end();
});

export default router;