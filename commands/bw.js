const Command = require('./command')
module.exports = class Bw extends Command {
    static match(message){
        return message.content.startsWith('!bw')
    }

    static action(message){
        let args = message.content.split(' ')
        args.shift()
        message.reply('http://wiki.teamliquid.net/starcraft/index.php?search=' + args.join('+'))
    }
}