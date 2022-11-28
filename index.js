const express = require('express');
const app = express();
const PORT = 8080;

// I use the express.json middleware to convert the body in json
app.use(express.json())

app.get('/', (req, res) => {
    res
        .status(200)
        .send('Smart Home API Server is running')
        .end();
});



app.listen(
    PORT,
    () => console.log(`It is alive on http://localhost:${PORT}`)
);