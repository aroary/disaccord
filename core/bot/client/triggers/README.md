# Add triggers
#### Paste the code below into a new file in the `core\bot\client\triggers` directory.
```js
const discord = require("discord.js");

/**
 * @description Check if we want to run the trigger.
 * @param {discord.Client} client - The client
 * @param {discord.Message} message - The message
 */
function conditions(client, message, args) {
    if (/*CONDITION ===*/ true) return true;
    else return false;
};

/**
 * @description Run if the condition returns true.
 * @param {discord.Client} client - The client.
 * @param {discord.Message} message - The message.
 */
function run(client, message, argsient) {
    // CODE
};

module.exports = {
    config: {
        name: "NAME",
        description: "DESCRIPTION",
        permissions: ["SEND_MESSAGES"]
    },
    execute: {
        conditions,
        run
    }
};
```
* **`CONDITION`** → Replace with the condition of weather or not to run the command.
* **`CODE`** → Replace with the code to run if the condition returns true.
* **`config`**: *`Object`* The configuration data for the trigger.
    * **`name`**: *`String`* The name of the trigger (Not used to execute the trigger).
    * **`description`**: *`String`* The description of the trigger.
    * **`permissions`**: *`Array`* Ther permissions required to run the trigger (checks for each and for client and user).
    * **`direct`**: *`Boolean`* Weather or not to allow the trigger to run in a direct channel.
    * **`server`**: *`Boolean`* Weather or not to allow the trigger to run in a guild channel.
    * **`available`**: *`Boolean`* Weather or not to allow everyone to use the trigger.
    * **`log`**: *`Boolean`* Weather or not to log the triggers usage.
* **`execute`**: *`Object`* The functions the trigger runs.
    * **`conditions`**: *`Function`* Returns weather or not the trigger should *run*.
    * **`run`**: *`Function`* The function *ran* if the condition returns true.