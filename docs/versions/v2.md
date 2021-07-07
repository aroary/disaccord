<div id="header" style="text-align:center;">
    <img src="https://cdn.discordapp.com/attachments/806009448597946393/856372173966934026/854412204877807650.png" style="width:25%;">
</div>

# Disaccord
## Index
* Getting started
    * [Introduction](#introduction)
    * [Settings](#settings)
* [Commands](#commands)
    * [Categories](#categories)
* [Triggers](#triggers)
* [Reactions](#reactions)
* [Events](#events)
* [Status](#status)
* [Website](#website)
    * Remote Logger
* [data](#data)
___
## Getting Started
* ### Introduction
#### Dissacord is a Discord bot template for making discord bots. The Reason we made Dissacord was because we saw that there was no good dynamic template for new discord.js developers to use to learn how to make bots. Enjoy this command handler and we would apreciate feadback and bug reports.
* ### Settings
#### For your bot to work, the most important thing you will need to do is fill in the settings file. The most important parameter in the settings file is the token string. Fill in the token, prefix and developers fields now, you can come back to the rest later.
```json
{
    "token": "BOT_LOGIN_TOKEN",
    "prefix": "BOT_COMMAND_PREFIX",
    "port": 3000,
    "statusInverval":300000,
    "owners": ["USER_ID"],
    "developers": ["USER_ID"],
    "testers": ["USER_ID"],
    "supportServer": "SERVER_ID",
    "description": "BOT_DESCRIPTION",
    "version": "2.12.15.46"
}
```
>###### `/.secrets.json`
* **`token`**: *`String`* - The token used for logging in the bot goes here.
* **`prefix`**: *`String`* - The prefix for the bot. (prefix is used with the command to run it)
* **`port`**: *`Intiger`* - The port number for the webapp to listen at. (`80` for defult, `null` for no webapp)
* **`statusInverval`**: *`Intiger`* - The interval to set a new status (milliseconds)
* **`owners`**: *`Array`* - The owners of the bot have access to all commands.
    * *`String`* - User ID
* **`developers`**: *`Array`* - The developers of the bot have access to everything.
    * *`String`* - User ID
* **`testers`**: *`Array`* - The testers of the bot have access to some special features.
    * *`String`* - User ID
* **`supportServer`**: *`String`* - Support server for the bot.
* **`description`**: *`String`* - A description of the bot to display.
* **`version`**: *`String`* - The version of this command handler (latest is `2`)
##### [back to top](#index)
## Commands
### Use this template to make and add commands.
```javascript
const Discord = require('discord.js');
module.exports = {
    config: {
        info: {
            name: "COMMAND_NAME",
            usage: "COMMAND_USAGE (no prefix)",
            description: "COMMAND DESCRIPTION",
            aliases: [],
            permissions: ["SEND_MESSAGES"]
        },
        availability: {
            find: true, // apears in the help command
            public: true, // available to non developers
            channel: "all" // all, guild, direct (set where the command can be used)
        }
    },
    /**
     * @param {Discord.Client} client - Your client 
     * @param {Discord.Message} message - The message
     * @param {Array} args - The message arguments (mesage.content.split(" "))
     */
    execute: (client, message, args) => {
        // Code
    }
};
```
>###### `/docs/templates/command.js`
* **`info`**: *`Object`* - Information about the command.
    * **`name`**: *`String`* - The name of the command. (this will run the command)
    * **`usage`**: *`String`* - How the command is used. (without the prefix in front)
    * **`description`**: *`String`* - What the command does.
    * **`aliases`**: *`Array`* - Other names for the command. (these will also run the command)
        * *`String`* - Secondarry names.
    * **`permissions`**: *`Array`* - The permissons required for the bot and user to run the command. (checks for each (bot and user))
        * *`String`* - Discord permissions. (`/core/constants/permissions.json`)
* **`availability`**: *`Object`* - Limits to the command.
    * **`find`**: *`Boolean`* - Appears on the help command.
    * **`public`**: *`Boolean`* - Can be ran by anyone (with permissions)
    * **`channel`**: *`String`* - Where the command can be ran. (`all`: Anywhere, `guild`: Only in a server, `private`: Only in a direct message)
* ### Categories
### Use this Template to add Command categories.
```json
{
    "id": "CTG",
    "name": "CATAGORY_NAME",
    "description": "CATEGORY DESCRIPTION"
}
```
>###### /docs/templates/category.json
* **`id`** *`String`* - The help command will be used with the id to show the category.
* **`name`** *`String`* - The name of the category to display on the help command. (Set to `null` to remove from help command)
* **`description`** *`String`* - A description of the commands in the category.
##### [back to top](#index)
## Triggers
### Use this template to make and add triggers.
```javascript
const Discord = require('discord.js');
module.exports = {
    config: {
        info: {
            name: "NAME",
            description: "DESCRIPTION",
            permissions: []
        },
        availability: {
            find: true,
            public: true,
            channel: "all", // all, guild, private
            position: "start" // start, end, include
        }
    },
    /**
     * @param {Discord.Client} client 
     * @param {Discord.Message} message 
     * @param {Array} args - The message arguments (message.content.split(" ")) 
     */
    execute: (client, message, args) => {
        // Code
    }
};
```
>###### `/docs/templates/trigger.js`
* **`info`**: *`Object`* - Information about the trigger.
    * **`name`**: *`String`* - The name of the trigger. (used to trigger the trigger) 
    * **`description`**: *`String`* - A description of the trigger.
    * **`permissions`**: *`Array`* - The required permissions to execute the trigger. (checks for each (bot and user))
        * *`String`* - Discord permissions. (`/core/constants/permissions.json`)
* **`availability`**: *`Object`* - Limitations of the trigger.
    * **`find`**: *`Boolean`* - Can be found on the help command.
    * **`public`**: *`Boolean`* - Can be used by anyone with permissions.
    * **`channel`**: *`String`* - Where the trigger can run. (`all`: Anywhere, `guild`: Only in a server, `private`: Only in a direct message)
    * **`position`**: *`String`* - Where the key word (name) needs to be found to execute the trigger. (`start`, `end`, `include`)
##### [back to top](#index)
## Reactions
### Use this template to make and add reactions.
```javascript
const Discord = require('discord.js');
module.exports = {
    config: {
        emoji: "",
        permissions: []
    },
    /**
     * @param {Discord.Client} client - Your client
     * @param {Discord.MessageReaction} reaction - The reaction
     * @param {Discord.User} user - The user who reacted
     */
    execute: (client, reaction, user) => {
        // Code
    }
};
```
>###### `/docs/templates/reaction.js`
* **`emoji`**: *`String`* - The actual emoji. (you may need to copy and past)
* **`permissions`**: *`Array`* - The required permissions to execute the reaction. (checks for each (bot and user))
    * *`String`* - Discord permissions. (`/core/constants/permissions.json`)
##### [back to top](#index)
## Events
### Use this template to make and add events.
```javascript
const Discord = require('discord.js');
module.exports = {
    name: "name",
    /**
     * @param {Discord.Client} client - Your client 
     */
    run: (client/*, other events*/) => {
        // code
    }
};
```
>###### `/docs/templates/event.js`
* **`name`**: *`String`* - The event name. (`/core/constants/events.json`)
* **`run`**: *`Function`* - The function ran on an event. (params: `client`, other)
    * *`Paramter`* - Discord event listener parameters. (`/core/constants/events.json`)
##### [back to top](#index)
## Status
### Use this emplate to add a status to the bot.
```json
[
    {
        "type": "LISTENING",
        "name": "{users} users"
    },
    {
        "type": "PLAYING",
        "name": "in {servers} servers"
    }
]
```
>###### `/core/utilities/status/presences.json`
* **`type`**: *`String`* - The type of status (`/core/constants/activities.json`)
* **`name`**: *`String`* - The data shown in the status. (replace {users} with user count and {servers} with server count)
* Set interval in `/.secrets.json`.
##### [back to top](#index)
## Website
* The defult content sent to the website is your support servers `iframe`.
    * If you did not set your support servers `iframe` the defult is the official disacord support server `iframe`.
    * Set the support server id in `/.secrets.json` (defult: https://discord.com/widget?id=854114095929491456&theme=dark).
* The website does not initiate if there is no port found.
    * Set the port in `/.secrets.json`.
### Remote logger
#### Set the url for the logger to send requests to.
```javascript
const secure = true;
const ip = "";
const domain = "logs.aroary.repl.co";
const port = null;
const endpoint = "/";
```
>###### `core\utilities\logger.js`
* **`secure`**: *`Boolean`* - If the website starts with https then it is secute and `secure` should be set to `true`.
* **`ip`**: *`String`* - A machine ip address to send requests to.
* **`domain`**: *`String`* - A domain name to send requests to.
* **`port`**: *`Integer`* - A port number if there is one. (not `80`)
* **`endpoint`**: *`String`* - The end of the url (filepath). (`"/"` will be treated as an empty string.)
* If there is no `ip` and no `domain` then the logger will not send any requests.
    * The `ip` address will be used if there is both an `ip` and `domain`.
```javascript
const express = require("express");
const app = express();
const port = 80;

app.get("/",(req, res) => {
	try {
    	console.log(decodeURIComponent(req.query.data ? req.query.data : "NO DATA"));
		res.json({ code: "200" });
	} catch (error) {
		console.log(error);
		res.json({ code:"500" });
	};
});

app.listen(port);
```
>###### `https://github.com/aroary/remote_logger_utility`
* Clone the code from the `https://github.com/aroary/remote_logger_utility` package to recieve log requests.
* **`port`**: *`Integer`* - If you set a different port you may need to update in `core/utilities/logger.js`.
##### [back to top](#index)
## Data
* **activities**: `core\constants\activities.json`.
* **permissions**: `core\constants\permissions.json`.
* **Events**: `core\constants\events.json`.
    * > ⚠️ Events may not be 100% accurate, please report innacurcy to that we can fix it.
##### [back to top](#index)
___
>### Thank you for using this package for your bot, it means that my hard work is not for nothing!
>### If you have anything to say, feadback is welcomed and appreciated.
>### Please report any bugs or errors, we want to make sure our package is as healthy as possible!
>>* #### If you nead any additional help or assistance you are welcome to join our support server. [Join](https://discord.gg/BHtNSq5bq2)
>>* #### If you want to see an example of a real bot using this package you can now invite our bot. [Invite](https://discord.com/oauth2/authorize?client_id=852018638369062913&scope=bot&permissions=8)
>***`aroary`***
##### [back to top](#index)

<div id="header" style="text-align:center;">
    <img src="https://cdn.discordapp.com/attachments/806009448597946393/856372173966934026/854412204877807650.png" style="width:25%;">
</div>