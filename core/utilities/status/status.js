const status = require("./presences.json");

// Set the status.
function setStatus(client) {
    // Loop the Array.
    const then = status[0];
    status.shift();
    status.push(then);

    // Replace the brackets with there corresponding values.
    const stat = status[0].name
        .replace("{servers}", client.guilds.cache.size)
        .replace("{channels}", client.channels.cache.size)
        .replace("{users}", client.users.cache.size);
    status[0].name = stat;

    // Set the presence.
    client.user.setPresence({ activity: status[0], status: 'online' })
        .then(presence => {
            client.log.presence(presence.activities[0].type, presence.activities[0].name);
        });
};
module.exports = (client) => {
    // On ready, set the status.
    setStatus(client);

    // Loop through the Array of presences.
    setInterval(() => {
        // Check if we want a new presence.
        if (client.online) {
            setStatus(client);
        };
    }, 5 * 60000);
};