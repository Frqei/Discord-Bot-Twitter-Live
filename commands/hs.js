const Command = require('./command')
module.exports = class Hs extends Command {
    static match(message){
        return message.content.startsWith('!hs')
    }

    static action(message){
        let args = message.content.split(' ')
        args.shift()
        message.reply('http://wiki.teamliquid.net/hearthstone/index.php?search=' + args.join('+'))
    }
}
