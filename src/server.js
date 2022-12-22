import express from 'express';
import batteryRouter from './routers/batteryRouter.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(batteryRouter);

app.listen(PORT, () => {
    console.log(`Alive on http://localhost:${PORT}`);
    console.log('Press Ctrl+C to quit.');
});

/**
 * API calls
 */

app.get('/', (req, res) => {
    res
        .status(200)
        .send('Smart Home API Server is running')
        .end();
});

// app.get('/:appliance', (req, res) => {

//     randomChangeBatteriesStatus();

//     res
//         .status(200)
//         .send({
//             capacity: batteriesCapacity,
//             unitOfMeasure: 'kWh'
//         })
//         .end();
// });