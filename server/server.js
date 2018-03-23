const express = require('express')
const bodyParser = require('body-parser')
const PORT = 4000;

const app = express();

app.use(bodyParser.json());

app.get('/api/test', (req,res) => {
    res.status(200).send("yo, from the backend!")
})

app.listen(PORT, () => console.log("You are running on port 4000"))
