const Command = require('./command')
module.exports = class Sc2 extends Command {
    static match(message){
        return message.content.startsWith('!sc2')
    }

    static action(message){
        let args = message.content.split(' ')
        args.shift()
        message.reply('http://wiki.teamliquid.net/starcraft2/index.php?search=' + args.join('+'))
    }
}