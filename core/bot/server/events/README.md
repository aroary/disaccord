# Event template
```js
const discord = require("discord.js");

/**
 * @description DESCRIPTION
 * @param {discord.Client} client - The client
 */
function run(client /*, other params */) {
    // Code
};

module.exports = { name: "EVENT_NAME", run }
```
* **`DESCRIPTION`** → Replace with a desription of the event.
* **`EVENT_NAME`** → The name of the event which the code will run on (`documents\events.json`).
* **`run`**: *`Function`* The code to run on the event.