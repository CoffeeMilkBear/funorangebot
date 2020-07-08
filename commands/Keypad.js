const Chariot = require('chariot.js');

/**
 * This example is an extremely basic command example of how a command could look like and work with Chariot.js
 */
class Keypad extends Chariot.Command {
    constructor() {
        super();

        this.name = 'keypad';
        this.cooldown = 3;
        this.allowDMs = true;
        this.help = {
            message: 'FunOranges epic keypad',
            usage: 'keypad',
            example: ['keypad'],
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
        message.channel.createMessage("Custom Built by FunOrange himself, not available at the moment");
    }
}

module.exports = new Keypad();