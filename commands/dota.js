const Command = require('./command')
module.exports = class Dota extends Command {
    static match(message){
        return message.content.startsWith('!dota')
    }

    static action(message){
        let args = message.content.split(' ')
        args.shift()
        message.reply('http://wiki.teamliquid.net/dota2/index.php?search=' + args.join('+'))
    }
}