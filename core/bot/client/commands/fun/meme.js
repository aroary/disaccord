const Discord = require('discord.js');
module.exports = {
    config:{
        info:{
            name:"meme",
            usage:"meme",
            description:"Get a random meme!",
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
        if(message.channel.nsfw){
            getMeme(client, message, true);
        }else{
            getMeme(client, message);
        };
    }
};

function getMeme(client, message, nsfw = false){
    var fetch = require('node-fetch');
    let url = 'http://meme-api.herokuapp.com/gimme';
    let settings = {method: 'get'};

    fetch(url, settings)
    .then(res => res.json())
    .then(json => {
        if(!nsfw && json.nsfw){
            setTimeout(() => {
                getMeme();
            }, 1000);
        }else{
            const meme = new Discord.MessageEmbed()
            .setDescription(json.title)
            .setImage(json.url)
            .setFooter(json.subreddit, "https://cdn.discordapp.com/attachments/766316423306805269/855169541805441024/emoticon-xxl.png")
            .setTimestamp();
            message.channel.send(meme);
        };
    })
    .catch(() => {
        message.channel.send("There was a roblem getting your meme, try again later.")
        client.log.error("Error getting meme from 'http://meme-api.herokuapp.com/gimme'.");
    });
};