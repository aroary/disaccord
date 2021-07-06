// Delay version.
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

// Sleep version.
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

// Module functions.
module.exports = {delay, sleep};