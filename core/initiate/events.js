const fs = require('fs');
/**
 * Initialized Client Events.
 * @param {Discord.Client} client - Your Client
 */
module.exports=(client) => {
    fs.readdir('core/bot/server/events', (err, files) => {
        // If an error occurs, log it to the console and abort command initialization.
        if(err)return client.log.error(`Could not read event directory: ${err.message}`);

        // Filter for only JS files and log the amount found.
        const jsFiles = files.filter(fileName => fileName.split('.').pop() === 'js');
        client.log.log(`Loading ${jsFiles.length} events.`);
        
        jsFiles.forEach(file => {
            const event = require(`../bot/server/events/${file}`);

            // Log loaded events.
            client.log.load(`Event Loaded: ${event.config.name.toUpperCase()}`);

            // Listen for events.
            client.on(event.config.name, event.run.bind(null, client));
        });
    });
};