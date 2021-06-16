const status = require("./presences.json");
function setStatus(client){
    const then = status[0];
    status.shift();
    status.push(then);
    client.user.setPresence({activity:status[0], status:client.online ? 'online':'dnd',})
    .then(presence => {
        client.log.presence(presence.activities[0].type, presence.activities[0].name);
    });
};
module.exports = (client) => {
    setStatus(client);
    setInterval(() => {
        setStatus(client);
    },60000);
};