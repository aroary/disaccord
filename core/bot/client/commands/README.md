# Template for adding command categories
### Paste the code below into a new file called `settings.json` in your new command folder in the `core\bot\client\commands` directory.
```json
{
    "name": "NAME",
    "id": "ID",
    "description": "CATEGORY_DESCRIPTION.",
    "helpMessage": true
}
```
* **`name`**: *`String`* The *name* of the category.
* **`ID`**: *`String`* The *ID* of the category.
* **`description`**: *`String`* The category *description*.
* **`helpMessage`**: *`Boolean`* Weather or not to display in the help message.
# Template for adding commands
### Paste the code below into your new command file in the `core\bot\client\commands\CATEGORY` directory.
```js
const discord = require("discord.js");

/**
 * @description FUNCTION_DESCRIPTION.
 * @param {discord.Client} client - The client.
 * @param {discord.Message} message - The message.
 * @param {Array} args - The arguments.
 */
function run(client, message, args) {
    // Code
};

module.exports = {
    config: {
        name: "NAME",
        usage: "USAGE",
        description: "DESCRIPTION",
        alias: [],
        permission: ["SEND_MESSAGES"],
        help: true,
        available: true,
        log: true
    },
    run
};
```
* **`config`**: *`Object`* The command data.
    * **`name`**: *`String`* The name of the command.
    * **`usage`**: *`String`* The usage of the command (without the prefix).
    * **`description`**: *`String`* The command description.
    * **`alias`**: *`Array`* An alias which can also run the command.
    * **`permission`**: *`Array`* The required permission to run the command.
    * **`help`**: *`Boolean`* Weather or not to display in the help command.
    * **`available`**: *`Boolean`* Weather or not to allow everyone to use the command (develepers always have access).
    * **`log`**: *`Boolean`* Weather or not to log the commands usage.
* **`run`**: *`Function`* The function to run on the command. 