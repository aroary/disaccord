# Adding buttons
#### Paste this code into a new file in the `core\bot\client\buttons` directory.
```js
const discord = require("discord.js");
const Entry = require("../../../utilities/logger");

/**
 * @description FUNCTION_DESCRIPTION
 * @param {discord.Client} client - The client.
 * @param {discord.Interaction} interaction - The interaction.
 */
function run(client, interaction) {
    // Code
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
* **`configuration`**: *`Object`* The button settings.
    * **`NAME`** → Replace with the name of the button.
    * **`log`**: *`Boolean`* Weather or not to log the buttons usage.
* **`run`**: *`Function`* The Function to run when the button is pressed.
___
## Creating a button component
#### Paste this code where you want to create your button
```js
const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('primary')
					.setLabel('Primary')
					.setStyle('PRIMARY'),
			);
```