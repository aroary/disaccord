module.exports = (client) => {
    client.log = require("../utilities/logger");
    client.status = require("../utilities/status/status");
};