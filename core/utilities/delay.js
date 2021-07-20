/**
 * @description Delay version.
 * @param {number} ms - Number of milliseconds to wait. 
 * @returns {Promise}
 */
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};
/**
 * @description Sleep version.
 * @param {number} ms - Number of milliseconds to wait. 
 * @returns {Promise}
 * @deprecated
 */
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

// Module functions.
module.exports = {delay, sleep};