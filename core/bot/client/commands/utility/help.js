const Discord = require('discord.js');
module.exports = {
    config:{
        info:{
            name:"help",
            usage:"help (type | category | command | alias)",
            description:"Get information about the bot",
            aliases:["commands", "triggers", "reactions"],
            permissions:[]
        },
        availability:{
            find:true,
            public:true,
            channel:"all",
        }
    },
    execute:(client, message, args) => {
        const commands = client.help.commands;
        const cats = client.help.categories;

        // help defult message
        var help = new Discord.MessageEmbed()
        .setTitle("Help")
        .setDescription("`help <category>` for commands list, `help <command/alias>` for command info, `help` for basic information, `help triggers` for trigger list")
        .setFooter(`${client.config.prefix}help (type | category | command | alias)`, client.user.avatarURL())
        .setTimestamp();

        // Loop through categories
        cats.forEach(cat => help.addField(cat.name, cat.description, true));

        // Check for category
        if(args[0]){
            args[0]=args[0].toLowerCase();
            if(args[0].includes("trigger")){
                message.channel.send(client.help.trigger);
            }else{
                const command = client.commands.get(args[0]) || client.commands.get(client.aliases.get(args[0])) || cats.filter(cat => cat.name.toUpperCase() === args[0].toUpperCase() || cat.id === args[0].toUpperCase());
                if(Array.isArray(command)){
                    if(command.length > 0){
                        message.channel.send(commands.get(command[0].id));
                        if(command.length > 1){
                            client.log.warn("Duplicate category name found.");
                        };
                    };
                }else{
                    const commandHelp = new Discord.MessageEmbed()
                    .setTitle(command.config.info.name.toUpperCase())
                    .addFields(
                        {name:"Description:", value:command.config.info.description, inline: false},
                        {name:"Usage", value:command.config.info.usage, inline:false},
                        {name:"Aliases:", value:command.config.info.aliases.length > 0 ? command.config.info.aliases.join(", ") : "No aliases.", inline:false}
                    )
                    .setFooter(client.config.prefix, client.user.avatarURL())
                    .setTimestamp()
                    message.channel.send(commandHelp);
                };
            };
        }else{
            message.channel.send(help);
        };
    }
};