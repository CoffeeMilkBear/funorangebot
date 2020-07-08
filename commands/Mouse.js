const Chariot = require('chariot.js');

/**
 * This example is an extremely basic command example of how a command could look like and work with Chariot.js
 */
class WhatMouse extends Chariot.Command {
    constructor() {
        super();

        this.name = 'mouse';
        this.cooldown = 3;
        this.allowDMs = true;
        this.help = {
            message: 'FunOranges Mouse',
            usage: 'mouse',
            example: [',mouse'],
            inline: true
        }
    }

    /**
     *  This is the main method getting executed by the MessageHandler upon a valid command request
     * 
     * @param {Object} message The emitted message object that triggered this command  
     * @param {String[]} args The arguments fetched from using the command
     * @param {Object} chariot The bot client itself
     */
    async execute(message, args, chariot) {
        message.channel.createMessage("FunOrange uses the Cooler Master MM710");
    }
}

module.exports = new WhatMouse();