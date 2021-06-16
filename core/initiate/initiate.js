module.exports = (client) => {
    // misc
    client.help = {};

    // Load utilities
    require("./utility")(client)

    // Load commands
    require("./commands")(client);

    // Load triggers
    require("./triggers")(client);

    // Load reactions
    require("./react")(client);

    // Load events
    require("./events")(client);

    // Iniciate webserver
    require("./web")(client);
};