const Discord = require('discord.js');
module.exports = {
    config:{
        info:{
            name:"beep",
            usage:"beep",
            description:"beep",
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
        return message.channel.send("Boop!");
    }
};