var irc = require('irc');

var server = "irc.freenode.org";
var channels = ["#irc-cabal-bot-test-dev"];
var debug = false;

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
    autoRejoin: true,
    autoConnect: true,
}


var bot = new irc.Client(server, nicks["boring"], boringOptions);
var evilBot = new irc.Client(server, nicks["evil"], evilOptions);


//////////////////////////////////////////////////////////
// This is the "boring dude"
//////////////////////////////////////////////////////////

function runBoringBot() {
    bot.addListener("message#", function(from, to, text, msg) {
	if( from === nicks["evil"] ) return;
	if( text.match(/irc.*cabal/i) ) {
	    console.log(new Date() + ": " + from + " " + to + ", \"" + text +"\"");
	    evilBot.join(to);
	}
    });
}

//////////////////////////////////////////////////////////
// This is the evil bot
//////////////////////////////////////////////////////////

function runEvilBot() {
    evilBot.addListener("names", function(channel, nicks) {
	setTimeout(function () {
	    evilBot.say(channel, "There is no IRC cabal"); 
	    setTimeout(function () {
		evilBot.part(channel, "All hail discordia!");
	    }, 500);
	}, 200);
    });
}

// RUN!

runBoringBot();
setTimeout(runEvilBot, 100);
console.log("Starting bot...");
