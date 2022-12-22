const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

let batteriesCapacity = 0;
const increment = 10;
const decrement = 1;

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

app.get('/batteries', (req, res) => {

    randomChangeBatteriesStatus();

    res
        .status(200)
        .send({
            capacity: batteriesCapacity,
            unitOfMeasure: 'kWh'
        })
        .end();
});

app.get('/:appliance', (req, res) => {

    randomChangeBatteriesStatus();

    res
        .status(200)
        .send({
            capacity: batteriesCapacity,
            unitOfMeasure: 'kWh'
        })
        .end();
});


app.get('/reset_all', (req, res) => {

    batteriesCapacity = 0;

    res
        .status(200)
        .send({
            message: 'Batteries capacity equal to zero'
        })
        .end();
});


/**
 * Utilities
 */

function randomChangeBatteriesStatus() {

    let randomChoice = Math.random() < 0.5;

    if (randomChoice) {
        incrementBatteriesCapacity()
    } else {
        decrementBatteriesCapacity()
    }
}

function incrementBatteriesCapacity() {
    batteriesCapacity = batteriesCapacity + increment;
}

function decrementBatteriesCapacity() {
    batteriesCapacity = batteriesCapacity - decrement < 0 ? 0
        : batteriesCapacity - decrement;
}
