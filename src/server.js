import express from 'express';
import homeRouter from './routers/homeRouter.js';
import batteryRouter from './routers/batteryRouter.js';
import applianceRouter from './routers/applianceRouter.js';
import photovoltaicPanelsRouter from './routers/photovoltaicPanelsRouter.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use('/', homeRouter);
app.use('/', batteryRouter);
app.use('/', applianceRouter);
app.use('/', photovoltaicPanelsRouter);

app.listen(PORT, () => {
    console.log(`Alive on http://localhost:${PORT}`);
    console.log('Press Ctrl+C to quit.');
});

app.get('/', (req, res) => {
    res
        .status(200)
        .send('Smart Home API Server is running')
        .end();
});
