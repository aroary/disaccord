module.exports = {
    config: {
        name: 'ready'
    },
    run: async (client) => {
        client.log.ready(client);
        client.status(client);
    }
};