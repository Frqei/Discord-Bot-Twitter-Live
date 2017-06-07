const Command = require('./command')
module.exports = class Csgo extends Command {
    static match(message){
        return message.content.startsWith('!csgo')
    }

    static action(message){
        let args = message.content.split(' ')
        args.shift()
        message.reply('http://wiki.teamliquid.net/counterstrike/index.php?search=' + args.join('+'))
    }
}
