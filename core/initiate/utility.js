module.exports = client => {
    client.log = require("../utilities/logger");
    client.status = require("../utilities/status/status");
    if(client.log.url) client.log.warn(`Logging to ${client.log.url}DATA`);
};