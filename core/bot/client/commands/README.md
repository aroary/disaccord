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
___
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
        direct: false,
        server: true,
        available: true
    },
    run
};
```