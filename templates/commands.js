const Discord = require('discord.js');
module.exports = {
    config:{
        info:{
            name:"ping",
            usage:"ping",
            description:"ping the bot",
            aliases:[],
            permissions:[]
        },
        availability:{
            find:true,
            public:true,
            channel:"all",
        }
    },
    execute:(client, message, args) => {
        return message.channel.send("Pong!");
    }
};