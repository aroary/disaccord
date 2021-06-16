const Discord = require('discord.js');
module.exports = {
    config:{
        name:"messageReactionAdd"
    },
    run:(client, reaction, user) => {
        if(client.reactions.get(reaction.emoji)){
            const exe = client.reactions.get(reaction.emoji);
            exe.run(client, reaction, user);
        };
    }
};