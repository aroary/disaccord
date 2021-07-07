module.exports = (client) => {
    // misc
    client.help = new Object();

    // Load utilities.
    require("./utility")(client)

    // Load commands.
    require("./commands")(client);

    // Load triggers.
    require("./triggers")(client);

    // Load reactions.
    require("./reactions")(client);

    // Load events.
    require("./events")(client);

    // Iniciate webserver.
    require("./web")(client);
};