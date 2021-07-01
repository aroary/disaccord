const Discord = require('discord.js');
module.exports = {
    config: {
        info: {
            name: "embed",
            usage: "embed <JSON>",
            description: "Create a message embed with raw json",
            aliases: [],
            permissions: ["SEND_MESSAGES"]
        },
        availability: {
            find: true,
            public: false,
            channel: "all",
        }
    },
    /**
     * @param {Discord.Client} client - Your client 
     * @param {Discord.Message} message - The message
     * @param {Array} args - The message arguments (mesage.content.split(" "))
     */
    execute: (client, message, args) => {
        // Parse JSON data
        try {
            const data = JSON.parse(args.join(" "));
            message.channel.send({ embed: data });
            console.log(data);
        } catch (error) {
            message.channel.send("There was a problem converting that to json.");
        };
    }
};