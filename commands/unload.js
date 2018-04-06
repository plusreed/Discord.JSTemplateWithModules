const config = require('../config.json');
const main = require('../bot.js');
exports.run = (client, message, args) => {
    if (message.author.id !== config.owner) return;
    let cmd = args.join(' ');
    main.unload(message, cmd);
};

exports.help = {
    name: 'Unload',
    description: 'Unload a command. Reserved to bot owner.',
    usage: '<command-name>'
}