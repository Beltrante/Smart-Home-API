import express from 'express';
import homeRouter from './routers/homeRouter.js';
import batteryRouter from './routers/batteryRouter.js';
import applianceRouter from './routers/applianceRouter.js';
import photovoltaicPanelsRouter from './routers/photovoltaicPanelsRouter.js';
import meteoRouter from './routers/meteoRouter.js';
import expressWs from 'express-ws';
import cors from 'cors';

// const app = express();
const app = expressWs(express()).app;

const PORT = process.env.PORT || 80;

app.use(cors());

app.use('/', homeRouter);
app.use('/', batteryRouter);
app.use('/', applianceRouter);
app.use('/', photovoltaicPanelsRouter);
app.use('/', meteoRouter);

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

app.ws('/echo', function(ws, req) {
    ws.on('message', function(msg) {
        ws.send(msg);
        console.log(msg)
    });

    //setInterval(myFunction, 4000)

    function myFunction() {
        ws.send("PROVA");
        console.log("PROVA")
    }
});
