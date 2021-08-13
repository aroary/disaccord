/**
 * @file Status function for setting the clients status.
 * @author aroary
 */

const disocrd = require("discord.js");
const presences = require("../data/status.json");
const Entry = require("./logger");

/**
 * @description Loop through the array of presences and set the bots status.
 * @param {disocrd.Client} client - The client.
 */
module.exports = client => {
    // Check for presences.
    if (!presences.length) return new Entry("status", "No status set.").setColor("lime", "black").log();

    // Check if we need to loop through the presences at an interval.
    if (presences.length === 1) client.user.setPresence({ activities: [presences[0]], status: "online" });
    else setInterval(() => {
        // Replace name data with client data.
        presences[0].name = presences[0].name
            .replace("{users}", client.users.cache.size)
            .replace("{servers}", client.guilds.cache.size);

        // Set the presence to the first value in the array.
        client.user.setPresence({ activities: [presences[0]], status: "online" });

        new Entry("status", `${presences[0].type} ${presences[0].name}`).setColor("lime", "black").log();
        presences.push(presences.shift());
    }, client.secrets.statusInterval);
};