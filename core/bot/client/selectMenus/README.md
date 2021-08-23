# Adding select menus
#### Paste the code below into a new file in the `core\bot\client\selectMenus` directory.
```js
const discord = require("discord.js");
const Entry = require("../../../utilities/logger");

/**
 * @description FUNCTION_DESCRIPTION
 * @param {discord.Client} client - The client.
 * @param {discord.Interaction} interaction - The interaction.
 */
function run(client, interaction) {
    interaction.update({ content: `Hi ${interaction.values[0]}!`, components: [] });
};

module.exports = {
    configuration: {
        name: "NAME",
        log: true
    },
    run
};
```
* **`FUNCTION_DESCRIPTION`** → Replace with a description of the run function.
* **`configuration`**: *`Object`* The select menu settings.
    * **`NAME`** → Replace with the name of the button.
    * **`log`**: *`Boolean`* Weather or not to log the select menu usage.
* **`run`**: *`Function`* The Function to run when the slect menu is used.