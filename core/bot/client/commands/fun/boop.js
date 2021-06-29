const Discord = require('discord.js');
module.exports = {
    config:{
        info:{
            name:"boop",
            usage:"boop",
            description:"boop",
            aliases:[],
            permissions:[]
        },
        availability:{
            find:false,
            public:false,
            channel:"all",
        }
    },
    /**
     * @param {Discord.Client} client - Your client 
     * @param {Discord.Message} message - The message
     * @param {Array} args - The message arguments (mesage.content.split(" "))
     */
    execute:(client, message, args) => {
        return message.channel.send("Beep!");
    }
};