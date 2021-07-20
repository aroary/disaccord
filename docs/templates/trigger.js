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
     * @param {Array} args - The message arguments
     * @event message
     * @template
     */
    execute: (client, message, args) => {
        // Code
    }
};