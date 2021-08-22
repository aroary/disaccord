# Slash command template
#### Paste this code into a new file in the `core\bot\client\slashCommands` directory.
```js
const discord = require("discord.js");

/**
 * @description FUNCTION_DESCRIPTION
 * @param {discord.Client} client - The client.
 * @param {discord.Interaction} interaction - The interation.
 */
function run(client, interaction) {
    // Code
};

module.exports = {
    configuration: {
        log: true,
        permission: ["SEND_MESSAGES"],
        deploy: true
    },
    data: {
        name: "NAME",
        description: "DESCRIPTION",
        options: [
            {
                name: "OPTION_ONE_INPUT",
                type: "STRING",
                description: "DESCRIPTION",
                required: true,
                choices: [
                    {
                        name: "CHOICE_ONE",
                        value: "VALUE_ONE"
                    }
                ]
            }
        ]
    },
    run
};
```
* **`configureation`**: *`Object`* Settings for the slash command.
    * **`log`**: *`Boolean`* Weather or not to log the slash command usage.
    * **`permission`**: *`Array`* The permissions required to run this slash command.
    * **`deploy`**: *`Boolean`* Weather or not to redeploy the slash command data.
* **`data`**: *`Object`* Data to register with discord.
    * **`name`**: *`String`* The name of the slash command.
    * **`description`**: *`String`* The description of the slash command.
    * **`options`**: *`Array`* **Optional** Options that the user may fill in for the command arguments.
        * **`name`**: *`String`* The name of the option.
        * **`type`**: *`String`* The type of option (`parameters\dataOptionType.json`).
        * **`description`**: *`String`* The description of the option.
        * **`required`**: *`Boolean`* Weather or not the option is required.
        * **`choices`**: *`Array`* **Optional** The choices the user can choose from
            * **`name`**: *`String`* The name of the choice.
            * **`value`**: *`String`* The value of the choice.
* **`run`**: *`Function`* The function to run when a user executes the slash command.

<!-- → -->