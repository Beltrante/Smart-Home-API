const express = require('express');
const app = express();
const PORT = 8080;

// I use the express.json middleware to convert the body in json
app.use(express.json())

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

app.listen(
    PORT,
    () => console.log(`It is alive on http://localhost:${PORT}`)
);