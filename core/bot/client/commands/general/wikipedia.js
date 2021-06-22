const Discord = require('discord.js');
module.exports = {
    config:{
        info:{
            name:'wiki',
            usage:'wiki <query>',
            description:'Get data from wikipidia.',
            aliases:["wikipidia","search"],
            permissions:["SEND_MESSAGES"]
        },
        availability:{
            find:true,
            public:true,
            channel:"all",
        }
    },
    execute:(client, message, args) => {
        if(args[0]){
            const query = args.join("%20");
            var fetch = require('node-fetch');
            const url = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${query}`;
            let settings = {method:'get'};
    
            fetch(url, settings)
            .then(res => res.json())
            .then(json => {
                const pages = Object.entries(json.query.pages);
                const page = pages[0][1];

                var content;
                if(page.extract.length > 1900)content = page.extract.slice(0, 1900) + `[...](${url})`;
                else content = page.extract;

                const w = new Discord.MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setTitle("Wikipidia")
                .setDescription(content)
                .setFooter(`Pgae id: ${page.pageid}`, "https://cdn.discordapp.com/attachments/766383659414061127/830214439038746654/9k-removebg-preview1.png")
                .setTimestamp();
                message.channel.send(w);
            });
        };
    }
};