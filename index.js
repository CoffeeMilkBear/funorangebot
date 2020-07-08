const Chariot = require('chariot.js');
const config = require('./config');

class AsianBot529 extends Chariot.Client {
    constructor() {
        super(new Chariot.Config(
            config.token, 
            {
                prefix: ',',
                defaultHelpCommand: true,
                primaryColor: 'AQUA',
                owner: [
                    config.username,
                ]
            }
        ));
    }
}

module.exports = new AsianBot529();