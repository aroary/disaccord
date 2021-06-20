const Discord = require('discord.js');
module.exports = {
    config:{
        emoji:"✅",
        permissions:["ADD_REACTIONS"]
    },
    execute:(client, reaction, user) => {
        reaction.message.channel.send(reaction.emoji.name)
        .then(message => {
            message.delete({timeout:5000, reason:"testing"})
        });
    }
};