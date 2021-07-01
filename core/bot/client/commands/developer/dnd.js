const Discord = require('discord.js');
module.exports = {
    config: {
        info: {
            name: "dnd",
            usage: "dnd",
            description: "Put the bot offline",
            aliases: [],
            permissions: ["SEND_MESSAGES"]
        },
        availability: {
            find: false,
            public: false,
            channel: "direct",
        }
    },
    /**
     * @param {Discord.Client} client - Your client 
     * @param {Discord.Message} message - The message
     * @param {Array} args - The message arguments (mesage.content.split(" "))
     */
    execute: (client, message, args) => {
        if (client.online) {
            client.online = false;
            message.channel.send("Bot Disabled");
            client.user.setPresence({ activity: { type: "STREAMING", name: "Busy" }, status: 'dnd' })
        } else {
            client.online = true;
            message.channel.send("Bot Enabled");
        };
    }
};