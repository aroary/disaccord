const Discord = require('discord.js');
module.exports = {
    config: {
        info: {
            name: "hi",
            description: "Greatings!",
            permissions: ["SEND_MESSAGES"]
        },
        availability: {
            find: false,
            public: true,
            channel: "all",
            position: "start"
        }
    },
    /**
     * @param {Discord.Client} client - Your client 
     * @param {Discord.Message} message - The message
     * @param {Array} args - The message arguments (mesage.content.split(" "))
     */
    execute: (client, message, args) => {
        return message.reply("Hello!");
    }
};