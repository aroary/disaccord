const Discord = require('discord.js');
module.exports = {
    config:{
        info:{
            name:"pong",
            usage:"pong",
            description:"pong the bot",
            aliases:[],
            permissions:[]
        },
        availability:{
            find:false,
            
            public:false,
            channel:"all",
        }
    },
    execute:(client, message, args) => {
        return message.channel.send("Ping!");
    }
};