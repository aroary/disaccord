const Discord = require('discord.js');
const express = require('express');
const app = express();
/**
 * @param {Discord.Client} client - Your client 
 */
module.exports = client => {
    if(!client.secrets.port)return client.log.warn("No webapp port found. Webapp not initiated.")
    app.get('/', (req, res) => {
        if (client.config.supportServer) {
            res.send(`<iframe src="https://discord.com/widget?id=${client.config.supportServer}&theme=dark"width="350"height="500"allowtransparency="true"frameborder="0"sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>`);
        } else {
            client.log.warn("No support server set. Set the support server in 'disaccord/.secrets.js'. Refer to 'initiate/web.js'");
            res.send('<iframe src="https://discord.com/widget?id=854114095929491456&theme=dark"width="350"height="500"allowtransparency="true"frameborder="0"sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>');
        };
        client.log.web(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    });

    // Listen.
    app.listen(client.secrets.port);
    client.log.web(`App listening at https://localhost:${client.secrets.port}`);
};