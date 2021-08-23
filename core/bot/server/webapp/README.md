# Adding webpages
#### Paste the code below into a new file in the `core\bot\server\webapp` directory.
```js
const discord = require("discord.js");
const path = require("path");
const express = require("express");
const data = require("../../../data/publicData").data;

/**
 * @description PAGE_DESCRIPTION
 * @param {discord.Client} client - The client.
 * @param {express.Request} req - The request.
 * @param {express.Response} res - The response.
 */
function send(client, req, res) {
    
};

module.exports = {
    configuration: {
        path: ["URL_PATH"],
        static: "core/bot/client/webPages/PAGE_FOLDER"
    },
    send
};
```