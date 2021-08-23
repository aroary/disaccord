# Adding select menus
#### Paste the code below into a new file in the `core\bot\client\selectMenus` directory.
```js
const discord = require("discord.js");
const Entry = require("../../../utilities/logger");

/**
 * @description DESCRIPTION
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