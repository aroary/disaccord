const Discord = require('discord.js');
module.exports = {
    config:{
        info:{
            name:"NAME",
            description:"DESCRIPTION",
            permissions:[]
        },
        availability:{
            find:true,
            public:true,
            channel:"all", // all, server, private
            position:"start" // start, end, include
        }
    },
    execute:(client, message, args) => {
        // Code
    }
};