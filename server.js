const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const PORT = 3000;
const api = require("./routes/api");
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', api);
app.get('/', (req, res) => {
    res.send('Hello from server');
});

const server = app.listen(PORT, function () {
    console.log("App running on port", server.address().port);
});