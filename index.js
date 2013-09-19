var irc = require('irc');

var server = "irc.freenode.org";
var channels = ["#foofoobar"];
var debug = true;

var nicks = { boring: "boringdude", evil: "irccabal" };

var boringOptions = {
    userName: 'boringdude',
    realName: 'boringdude',
    debug: debug,
    showErrors: debug,
    autoRejoin: true,
    autoConnect: true,
    channels: channels
}

var evilOptions = {
    userName: 'irccabal',
    realName: 'The IRC Cabal',
    debug: debug,
    showErrors: debug,
    autoRejoin: false,
    autoConnect: false,
    channels: channels
}


var bot = new irc.Client(server, nicks["boring"], boringOptions);
var evilBot = new irc.Client(server, nicks["evil"], evilOptions);


//////////////////////////////////////////////////////////
// This is the "boring dude"
//////////////////////////////////////////////////////////

bot.addListener("message#", function(from, to, text, msg) {
    bot.say(to, "woo");
    evilBot.connect();
});


//////////////////////////////////////////////////////////
// This is the evil bot
//////////////////////////////////////////////////////////

evilBot.addListener("names", function(channel, nicks) {
    evilBot.say(channel, "YAY!");
    evilBot.disconnect("All hail discordia!");
});
