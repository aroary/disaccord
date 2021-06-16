const express = require('express');
const app = express();

module.exports = (client) => {
    app.get('/', (req, res) => {
        res.send("something!");
    });

    app.listen(client.secrets.port);
};