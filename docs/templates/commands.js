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
            channel: "all" // all, guild, direct set where the command can be used
        }
    },
    /**
     * @param {Discord.Client} client - Your client 
     * @param {Discord.Message} message - The message
     * @param {Array} args - The message arguments (mesage.content.split(" "))
     */
    execute: (client, message, args) => {
        return message.channel.send("Pong!");
    }
};