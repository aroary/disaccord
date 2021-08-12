# Add Initiation Files
#### Paste this code into a new file in the initiation directory.
```js
/**
 * @file DESCRIPTION_OF_FILE.
 */

const discord = require("discord.js");
const fs = require("fs");
const Entry = require("../utilities/logger");

/**
 * @description DESCRIPTION_OF_FUNCTION.
 * @param {discord.Client} client - The client.
 */
function FUNCTIONNAME(client) {
    // Read the directory.
    fs.readdir('core/bot/PATH', (error, files) => {
        // Terminate loading process if there is an error.
        if (error) return new Entry().setName("error").setValue(error).setColor({ backGround: "red" }).log();

        // Loop through relevant files.
        const TYPEFiles = files.filter(file => file.split('.').pop() === 'js');
        new Entry("load", `Found ${TYPEFiles.length} TYPE files.`).setColor("grey").log();
        TYPEFiles.forEach(file => {
            // Code
            
            new Entry("load", file).setColor("white", "black").log();
        });
    });
};

module.exports = FUNCTIONNAME;
```
* **`DESCRIPTION_OF_FILE`** → replace with a *description* of the file.
* **`DESCRIPTION_OF_FUNCTION`** → replace with a *description* of the function.
* **`FUNCTIONNAME`** → replace with the *name* of the function.
* **`PATH`** → replace with the *file path* to the folder you are initiating the files from.
* **`TYPE`** → replace with the *type* of files being initiated.