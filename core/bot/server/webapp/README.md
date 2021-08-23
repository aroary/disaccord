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
* **`PAGE_DESCRIPTION`** → Replace with a description of the page.
* **`configuration`**: *`Object`* The settings for the page.
    * **`path`**: *`Array`* The URL path for the webpage.
    * **`static`**: *`String`* The files used in the webpage.
* **`send`**: *`Function`* The function to send text/html to the client.
## Adding data to send to the client.
#### To add a variable to send to the client if the variable requires the bot to log in before it exists you can set it in the ready event (`core\bot\server\events\ready.js`). Otherwise you can set the variables name and value in the public data file (`core\data\publicData.js`).