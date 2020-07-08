const Chariot = require('chariot.js');

class AsianBot529 extends Chariot.Client {
    constructor() {
        super(new Chariot.Config(
            '', 
            {
                prefix: ',',
                defaultHelpCommand: true,
                primaryColor: 'AQUA',
                owner: [
                    '240958339939434496'
                ]
            }
        ));
    }
}

module.exports = new AsianBot529();