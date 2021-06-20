const Discord = require('discord.js');
module.exports = {
    config:{
        info:{
            name:"hi",
            description:"Greatings!",
            permissions:["SEND_MESSAGES"]
        },
        availability:{
            find:false,
            public:true,
            channel:"all",
            position:"start"
        }
    },
    execute:(client, message, args) => {
        return message.reply("Hello!");
    }
};