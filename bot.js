var TweetAlert = require('./tweet-alert'),
    app;
const Discord = require('discord.js')
const bot = new Discord.Client()

const Google = require('./commands/google')
const Ping = require('./commands/ping')
const Google = require('./commands/google')
const Ping = require('./commands/ping')
const SC2 = require('./commands/sc2')
const CSGO = require('./commands/csgo')
const Dota = require('./commands/dota')
const Bw = require('./commands/bw')
const Hs = require('./commands/hs')
const Ow = require('./commands/ow')

// Init 
// Twitter
app = new TweetAlert({
    //Application Settings > 
    //Consumer Key (API Key)
    consumer_key: 'cXeyzjnBB7B9hvfv3N9kSHZpv ',
    //Consumer Secret (API Secret)
    consumer_secret: 'qWZSACq9J1x3MLHCO1WcmMPwEpbsiZVjz18V2YcW2tdfQBH3wv',
    //Your Access Token
    access_token_key: '862776252872183808-hIcIolkSOKSoshC1WQ9y9ZPpFfXrEKP',
    //Your 	Access Token Secret
    access_token_secret: 'HH19139nNGwyYzEHdjPbRWDyeAJz16dhR1ajbXaZNTZag',
    //twitter screen names you want to repost on your discord (usualy the name in the url also known with the @)
    screen_name: ['FinalsPhantom','','']
});



bot.on('ready',function(){
//set bot's avatar
    bot.user.setAvatar('https://pbs.twimg.com/profile_images/883450167374032897/IIp1OJgH_400x400.jpg').catch(console.error)
})

//bot's token from discord that you can find https://discordapp.com/developers/applications/me/
bot.login('308011829463089152')


bot.on('message', message => {
    let commandUsed = SC2.parse(message) || CSGO.parse(message) || Google.parse(message) || Bw.parse(message) || Hs.parse(message) || Ow.parse(message) || Dota.parse(message) || Ping.parse(message)
})

setInterval(() => {

    let url = `https://api.twitch.tv/kraken/streams/THE_STREAM_NAME_AS_IN_URL?client_id=YOUR TWITCH CLIENT_ID`
    var channel= bot.channels.find("name", "general")
    request(url, (error, response, body) => {
    if (!error) {
        body = JSON.parse(body)
        if (body.stream) {
            if (StreamIDs.indexOf(body.stream._id) === -1) {
                channel.send(`[STREAM] => l live  twitch! `+'https://www.twitch.tv/THE_STREAM_NAME_AS_IN_URL')
                StreamIDs.push(body.stream._id)
            }
        }
    }
})
}, 1000 * 120)

// Wait for the bot to be ready
bot.on('ready', function() {
    console.log('ready');
    var channel= bot.channels.find("name", "general");
    // Start to track
    app.track();


    // Listen to tweet alert
    app.on('tweet', function(data) {
        //console.log(data);
        console.log('Twitter :: ', data);
        if(data.in_reply_to_user_id_str!==null) {

        }else {
            if (data.text.substring(0, 2) === 'RT') {
                channel.send('RT ' + ' https://twitter.com/' + data.screen_name + '/status/' + data.id_str);
            } else {
                channel.send('Sur Twitter ! ' + ' par : ' + data.name + ' @ ' + 'https://twitter.com/' + data.screen_name + '/status/' + data.id_str);
            }
        }

    });
});
