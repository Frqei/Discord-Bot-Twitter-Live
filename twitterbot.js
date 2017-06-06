var TweetAlert = require('./tweet-alert'),
    app;
const Discord = require('discord.js')
const bot = new Discord.Client()

const Google = require('./commands/google')
const Ping = require('./commands/ping')
// Init 
// Twitter
app = new TweetAlert({
    //Application Settings > 
    //Consumer Key (API Key)
    consumer_key: '',
    //Consumer Secret (API Secret)
    consumer_secret: '',
    //Your Access Token
    access_token_key: '',
    //Your 	Access Token Secret
    access_token_secret: '',
    //twitter screen names you want to repost on your discord (usualy the name in the url also known with the @)
    screen_name: ['','','']
});



bot.on('ready',function(){
//set bot's avatar
    bot.user.setAvatar('./avatar.png').catch(console.error)
})

//bot's token from discord that you can find https://discordapp.com/developers/applications/me/
bot.login('')


bot.on('message', message => {
    let commandUsed = Google.parse(message) || Ping.parse(message)
})


// Wait for the board to be ready
bot.on('ready', function() {
    console.log('ready');
    var channel= bot.channels.find("name", "general");
    // Start to track
    app.track();
    // Listen to tweet alert
    app.on('tweet', function(data) {
        console.log('New Tweet :: ', data.text, ' by ', data.name , '@' , 'https://twitter.com/' +data.screen_name );
        channel.send( 'New Tweet :: '+ data.text+ '\n by '+data.name +' @ ' + 'https://twitter.com/' +data.screen_name );
    });
});
