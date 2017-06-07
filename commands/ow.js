const Command = require('./command')
module.exports = class Ow extends Command {
    static match(message){
        return message.content.startsWith('!ow')
    }

    static action(message){
        let args = message.content.split(' ')
        args.shift()
        message.reply('http://wiki.teamliquid.net/overwatch/index.php?search=' + args.join('+'))
    }
}