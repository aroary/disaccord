/**
 * @file Log function utility.
 * @author aroary
 * @license MIT
 * @copyright Ⓒ 2021 aroary
 */

const moment = require("moment");
const chalk = require("chalk");

/**
 * @description Create an entry to log to the console.
 * @requires chalk
 */
class Entry {
    /**
     * @description Construct the Entry.
     * @param {Object} options - The entry data.
     */
    constructor (name = "", value = "") {
        this.name = name.toUpperCase();
        this.value = value;
        this.color = chalk.bgBlack.white;
    };

    /**
     * @description Set the name of the entry.
     * @param {String} name - The entry name.
     */
    setName(name){
        this.name = name.toUpperCase();
        return this;
    };

    /**
     * @description Set the value of the entry.
     * @param {String} value - The entry value.
     */
    setValue(value){
        this.value = value;
        return this;
    };

    /**
     * @description Set the color options.
     * @param {Object} options - The color options.
     * @example ("red", "black")
     */
    setColor(backGround = "black", foreGround = "white"){
        this.color = chalk.bgKeyword(backGround).keyword(foreGround);
        return this;
    };

    /**
     * @description Log the entry to the console.
     * @param {Boolean} consoleLog - Weather or not to log the entry to the console.
     * @returns The entry string.
     * @default true Logs the entry to the console.
     */
    log(consoleLog = true){
        const data = `[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${this.color(` ${this.name.length < 10 ? this.name + " ".repeat(10 - this.name.length) : this.name} `)} ${this.value}`;
        if(consoleLog) console.log(data);
        return data;
    };

    /**
     * @description Get the data of the enry without logging it.
     * @returns The entry data.
     * @deprecated Use log instead.
     */
    strung(){
        return `[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${this.color(` ${this.name.length < 10 ? this.name + " ".repeat(10 - this.name.length) : this.name} `)} ${this.value}`;
    };
};

module.exports = Entry;