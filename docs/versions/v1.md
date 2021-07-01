<div style="text-align:center;">
    <img src="https://cdn.discordapp.com/attachments/806009448597946393/856372173966934026/854412204877807650.png">
</div>

# Disaccord
> a discord bot *command*, *trigger*, *reaction* handler.
___
## Contents
- [Getting started](#Settings)
    - [About / help](#About)
- [Adding commands](#Commands)
    - [Adding categories](#Categories)
- [Adding message triggers](#Triggers)
    - [Adding reaction triggers](#Reactions)
- [Adding events](#Events)
- [Permissions](#Permissions)
- [Setting status](#Status)
- [Building your website](#Website)
## Settings
### To get started, clone the code to your compiler. Add all your bot information to the `.secrets.json`. your `.secrets.json` should look similar to this:
```json
{
    "token":"TOKEN",
    "prefix":"!",
    "port":3000,
    "owners":[],
    "developers":[],
    "testers":[],
    "supportServer":"SUPPORT_SERVER_ID",
    "description":"Just another bot!"
}
```
* **`token`**: This is your super secret bot login token.
* **`prefix`**: This is the prefix users will use to execute commands.
* **`port`**: This is the port your *webapp* will listen to.
* **`description`**: This is your bot description.
#### Check out the templates in `disaccord/templates`.
###### [Back to top](#Contents)
___
## Commands
### Use this template for making commands.
```javascript
const Discord = require('discord.js');
module.exports = {
    config:{
        info:{
            name:"COMMAND_NAME",
            usage:"COMMAND_USAGE (no prefix)",
            description:"COMMAND DESCRIPTION",
            aliases:[],
            permissions:[]
        },
        availability:{
            find:true, // apears in the help command
            public:true, // available to non developers
            channel:"all", // all, server, private set where the command can be used
        }
    },
    execute:(client, message, args) => {
        // Code
    }
};
```
> Commands are things that people use to do stuff, for example they send `ping` and the bot responds with `pong`.
##### info:
* **`name`**: The name of the command, this is what the user sends to execute the command.
* **`usage`**: example of how to use the command or the required and optional parameters.
* **`description`**: A description of what the command does.
* **`aliases`**: *Array* of *Strings* which are other names for the command.
* **`permissions`**: The permissions the Bot **and** the User need to execute the command.
##### availability:
* **`find`**: This *Bool* decides if the command will show up in the help command.
* **`public`**: This *Bool* will allow anyone to use the command if set to true.
* **`channel`**: This *String* is set to either `all`, `server`, `private`. If set to `all`, then the command can be used anywhere, if set to `server` then only in a server and if set to `private` than it can only be used in a direct message.
###### [Back to top](#Contents)
___
## Categories
### To add a new command catagory, make a new folder in the commands folder. Then add a category file called `category.json` and past the category template.
### The execute function will execute when the command is triggerd
```javascript
{
    "id":"CTG",
    "name":"CATAGORY_NAME",
    "description":"CATEGORY DESCRIPTION"
}
```
* **`id`**: The ID of the category is to help find the commands.
* **`name`**: The name of the category will be displayed on the front page of the help command. Set to `null` to avaoid this.
* **`description`**: This is the description of the type of commands on the catagory. This is displayed under the category *name* in the help command
___
###### [Back to top](#Contents)
## Triggers
### Use this template for making triggers.
```javascript
const Discord = require('discord.js');
module.exports = {
    config:{
        info:{
            name:"NAME",
            description:"DESCRIPTION",
            permissions:[]
        },
        availability:{
            find:true,
            public:true,
            channel:"all", // all, server, private
            position:"start" // start, end, include
        }
    },
    execute:(client, message, args) => {
        // Code
    }
};
```
> Triggers are things that execute when a user sends a keyword.
##### info
* **`name`**: The name of the trigger, this is what the user sends to execute the trigger.
* **`description`**: A description of what the command does.
* **`permissions`**: The permissions the Bot **and** the User need to execute the trigger.
##### availability
* **`find`**: This *Bool* decides if the command will show up in the help command.
* **`public`**: This *Bool* will allow anyone to use the command if set to true.
* **`channel`**: This *String* is set to either `all`, `server`, `private`. If set to `all`, then the command can be used anywhere, if set to `server` then only in a server and if set to `private` than it can only be used in a direct message.
* **`position`**: This reffers to the location of the *keyword* in the message. can be set to either `start` for the beginning of the message, `includes` for anywhere in the message and `end` for at the end of the message. The trigger will only execute of the *keyword* is in the correct place.
### The execute function will execute when the trigger is triggered.
###### [Back to top](#Contents)
___
## Reactions
### Use this template to add reaction triggers.
```javascript
const Discord = require('discord.js');
module.exports = {
    config:{
        emoji:"👋",
        permissions:[]
    },
    execute:(client, reaction, user) => {
        // Code
    }
};
```
> Reactions are activated when a user reacts to a message.
* **`emoji`**: The emoji needed to be used to run the trigger.
* **`permissions`**: The permissions required to run the trigger.
### The execute function will execute when the reaction is triggered.
> #### ⚠️ Currently unavailable.
###### [Back to top](#Contents)
___
## Events
### Use this template to add events
```javascript
const Discord = require('discord.js');
module.exports = {
    name:"name",
    run:(client/*, other events*/) => {
        // code
    }
};
```
> Events are what the api sends things that happen to, for example when a user sends a message the api will send the data to the message event.
* **`name`**: The name of the event.
* **`run`**: This function will run whenever the event name is triggered. If there are any other parameters, add them after the `client` paarameter.
### The run function will execute when an event is triggered.
###### [Back to top](#Contents)
___
## Permissions
```json
[
    "ADMINISTRATOR",
    "CREATE_INSTANT_INVITE",
    "KICK_MEMBERS",
    "BAN_MEMBERS",
    "MANAGE_CHANNELS",
    "MANAGE_GUILD",
    "ADD_REACTIONS",
    "VIEW_AUDIT_LOG",
    "PRIORITY_SPEAKER",
    "STREAM",
    "VIEW_CHANNEL",
    "SEND_MESSAGES",
    "SEND_TTS_MESSAGES",
    "MANAGE_MESSAGES",
    "EMBED_LINKS",
    "ATTACH_FILES",
    "READ_MESSAGE_HISTORY",
    "MENTION_EVERYONE",
    "USE_EXTERNAL_EMOJIS",
    "VIEW_GUILD_INSIGHTS",
    "CONNECT",
    "SPEAK",
    "MUTE_MEMBERS",
    "DEAFEN_MEMBERS",
    "MOVE_MEMBERS",
    "USE_VAD",
    "CHANGE_NICKNAME",
    "MANAGE_NICKNAMES",
    "MANAGE_ROLES",
    "MANAGE_WEBHOOKS",
    "MANAGE_EMOJIS"
]
```
> ###### core\bot\server\events
> #### ⚠️ The permissions array checks if the user has all the permissions not one or the other.
> #### ⚠️ The permissions array checks for permissions for the bot and user.
###### [Back to top](#Contents)
___
## Status
### Be sure to change the status array
### Defult:
```json
[
    {"type":"PLAYING", "name":"i guess"},
    {"type":"PLAYING", "name":"with fire"}
]
```
> ###### core\utilities\status\presences.json
#### You can use these in you `name` parameter to replace with a value:
* **`{servers}`**: add this to the `name` to replace it with the server count in the status
* **`{channels}`**: add this to the `name` to replace it with the channel count in the status
* **`{users}`**: add this to the `name` to replace it with the user count in the status
### Status types:
```json
[
    "PLAYING",
    "STREAMING",
    "LISTENING",
    "WATCHING",
    "CUSTOM",
    "COMPETING"
]
```
> core\constants\activities.json
#### You can use any of these in the `type` parameter.
###### [Back to top](#Contents)
___
## Website
### Your bot has a webapp
### Some bots need a webapp to keep the bot online, so we started one up for you.
```javascript
const express = require('express');
const app = express();

module.exports = (client) => {
    app.get('/', (req, res) => {
        res.send("something!");
    });

    app.listen(client.secrets.port);
};
```
> ###### core\initiate\web.js
#### You can also use your webapp as a website to have commands and info posted. We are considering adding a template for that as well.
###### [Back to top](#Contents)
___
## About
> ### If you encounter any problems, errors or you just need help or additional information you can let use know!
>> * [Issues / Bugs](https://github.com/aroary/disaccord/issues), Github issue report tab.
>> * [Help / Infomation](https://github.com/aroary/disaccord/discussions), Github repository `README.md` page.
>> * [Our Discord](https://discord.gg/BHtNSq5bq2), Join our discord for any other info or to test out bots made with this template.
>> * [Our Bot](https://discord.com/oauth2/authorize?client_id=852018638369062913&scope=bot&permissions=8), This is the invite link for our bot, the most advanced version of this template.
> ##### Thank you for using this handler, it means all this work is going into good use! I hope this explains everything you need to know, if there is anything we left out or can be changed let us know!
>> #### Please mention to us any errors or problems, we want to make sure we are bug free!
>>> ##### @aroary#4444
###### [Back to top](#Contents)