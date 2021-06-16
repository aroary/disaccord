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
    execute:(client, message, args) => {
        return message.channel.send("Boop!");
    }
};