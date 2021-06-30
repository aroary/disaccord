const Discord = require('discord.js');
module.exports = {
    config:{
        info:{
            name:"@everyone",
            description:"DESCRIPTION",
            permissions:[]
        },
        availability:{
            find:false,
            public:true,
            channel:"all", // all, server, private
            position:"include" // start, end, include
        }
    },
    /**
     * @param {Discord.Client} client 
     * @param {Discord.Message} message 
     * @param {Array} args - The message arguments (message.content.split(" ")) 
     */
    execute:(client, message, args) => {
        client.log.log(message.content);
    }
};