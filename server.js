const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res
        .status(200)
        .send('Smart Home API Server is running')
        .end();
});

// Start the server
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'TSHIRT',
        size: 'large'
    })
});

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'We need a logo! '});
    }

    res.send({
        tshirt: `TSHIRT with your ${logo} and ID of ${id}`
    });
});