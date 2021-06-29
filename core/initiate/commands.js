const Discord = require('discord.js');
const fs = require('fs');
/**
 * Initializes Client Commands.
 * @param {Discord.Client} client - Your Client
 */
module.exports = (client) => {
    // Define a collection for both commands themselves and their aliases.
    client.commands = new Discord.Collection();
    client.aliases = new Discord.Collection();
    
    // Help JSON
    client.help.categories = [];

    // Read the command directory.
    fs.readdir(`core/bot/client/commands`, (err, dir) => {
        // If an error occurs, log it to the console and abort command initialization.
        if(err)return client.log.error(`Could not read directory: ${err.message}`);

        // Help command catagories array
        client.help.commands=new Map();

        // Read folders in commands folder.
        dir.forEach(folder => {
            var loaded = "";
            fs.readdir(`core/bot/client/commands/${folder}`, (error, files) => {
                // If an error occurs, log it to the console and abort command initialization.
                if(error)return client.log.error(`Could not read directory: ${error.message}`);
                
                // Find catagory config folder
                const settings = files.filter(name => name.split(".").pop() === "json");
                if(settings.length < 1)client.log.error(`no config file found in: commands/${folder}`);
                else if(settings.length > 1)client.log.warn(`extra json files found for: commands/${folder}`);
                const config = require(`../bot/client/commands/${folder}/${settings[0]}`);

                // Filter for only JS files and log the amount found.
                const jsFiles = files.filter(fileName => fileName.split('.').pop() === 'js');
                client.log.log(`Loading ${jsFiles.length} commands from ${folder}.`);

                // Loop for each JS file and add it to the collection.
                jsFiles.forEach(file => {
                    const cmd = require(`../bot/client/commands/${folder}/${file}`);
                    client.commands.set(cmd.config.info.name.toLowerCase(), cmd);

                    // Add command aliases to the collection.
                    cmd.config.info.aliases.forEach(alias => {
                        client.aliases.set(alias.toLowerCase(), cmd.config.info.name.toLowerCase());
                    });

                    // Log that each command has succesfully loaded.
                    client.log.load(`Command Loaded: ${cmd.config.info.name.toUpperCase()}. Aliases: ${cmd.config.info.aliases.length > 0 ? cmd.config.info.aliases.length : 'None.'}`);

                    // Add to help command.
                    if(cmd.config.availability.find){
                        const info = cmd.config.info;
                        loaded += `**\`${info.name}\`**: ${info.description}\n`;
                    };
                });

                // Set help command to loaded commands for each folder
                if(config.name){
                    const embed = new Discord.MessageEmbed()
                    .setTitle(config.name)
                    .setDescription(loaded.length > 0 ? loaded : "Coming soon!")
                    .setFooter(config.id, "https://cdn.discordapp.com/attachments/766316423306805269/855173259255480380/outline-xxl.png")
                    .setTimestamp();

                    // Set the help command's command help embeds
                    client.help.categories.push(config);
                    client.help.commands.set(config.id, embed);
                };
            });
        });
    });
};