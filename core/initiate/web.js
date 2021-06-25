const https = require("http");
const fs = require("fs");
const path = require('path');
const express = require('express');
const app = express();

module.exports = (client) => {
    app.get('/', (req, res) => {
        if(client.config.supportServer){
            res.send(`<iframe src="https://discord.com/widget?id=${client.config.supportServer}&theme=dark"width="350"height="500"allowtransparency="true"frameborder="0"sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>`);
        }else{
            client.log.warn("No support server set. Set the support server in 'disaccord/.secrets.js'. Refer to 'initiate/web.js'");
            res.send('<iframe src="https://discord.com/widget?id=854114095929491456&theme=dark"width="350"height="500"allowtransparency="true"frameborder="0"sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>');
        };
        client.log.web(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    });
    
    // Listen.
    app.listen(client.secrets.port);
    client.log.log(`App listening at https://localhost:${client.secrets.port}`);
};