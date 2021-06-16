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
    execute:(client, message, args) => {
        return message.channel.send("Beep!");
    }
};