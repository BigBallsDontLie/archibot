const Discord = require('discord.js');
const client = new Discord.Client();

var list = []
var expdMessage = "~EXPD LIST~"
var rand = 0

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    var msg = message.content.toUpperCase()
    if (msg === 'GOOD MORNING') {
    	message.reply('Good morning sunshine <3');
  	}
    else if (msg === 'YOU SUCK') {
    	message.reply('But you swallow');
  	}
    else if (msg === 'I LOVE YOU') {
        if (rand < 0.6) {
    	    message.reply('And I love you <3');
        }
        else if (rand < 0.8) {
    	    message.reply('*looks away*');
        }
        else {
    	    message.reply('Uhm.. I only see you as an friend. Sorry.');
        }
        rand = Math.random()
  	}
    else if (msg === 'WHAT IS LOVE?') {
    	message.reply('BABY DONT HURT ME </3');
  	}
    else if (msg === 'DONT HURT ME') {
    	message.reply('NO MORE </3');
  	}
    else if (msg === 'I WANNA KNOW WHAT LOVE IS') {
    	message.reply('I WANT YOU TO SHOW ME <3');
  	}
    else if (msg === 'CUT MY LIFE INTO PIECES') {
    	message.reply('DIS IS MA LAST RESORT');
  	}
    else if (msg === 'SUFFOCATION') {
    	message.reply('NO BREATHIN');
    	message.reply('DUN GIVE A FOOK IF I CUT ME ARM BLEEDIN');
  	}
    else if (msg === 'SHOW') {
    	var listString = '\n'
            for (i = 0; i < list.length; i++) {
              listString += (i+1) + ". " + list[i] + "\n";
            }
            message.reply(listString);
  	}
    var multiSplit = message.content.split(" ", 4);
    if (multiSplit[0].toUpperCase() === 'OH') {
        if (multiSplit[1].toUpperCase() === 'GREAT') {
            if (multiSplit[2].toUpperCase() === 'LORD') {
                if (multiSplit[3].toUpperCase() === 'ARCHI,') {
                    
                        var rande = Math.random()
                        if (rande < 0.2) {
                            message.reply('No my child');
                        }
                        else if (rande < 0.4) {
                            message.reply('Maybe');
                        }
                        else if (rande < 0.6) {
                            message.reply('FOOK YES BABY 10000% <3 <3 <3');
                        }
                        else if (rande < 0.8) {
                            message.reply('Does priests like young boys?');
                        }
                        else {
                            message.reply('No wth, r u stoopid?');
                        }
                }
            }
        }
    }
    else if (multiSplit[0].toUpperCase() === 'LET') {
        if (multiSplit[1].toUpperCase() === 'ME') {
            if (multiSplit[2].toUpperCase() === 'TELEPORT') {
                if (multiSplit[3].toUpperCase() === 'TO') {
                    var rande = Math.random()
                    if (rande < 0.3) {
                        message.reply('*teleported to ' + multiSplit[4] + '!! Woop woop :D*');
                    }
                    else if (rande < 0.7) {
                        message.reply('*teleport machine exploded, whoops*');
                    }
                    else {
                        message.reply('*tried to teleported to ' + multiSplit[4] + ', but was recklessly whipped by Jesus for tryin to defying the laws of physics*');
                    }
                }
            }
        }
    }
    
    var splitted = message.content.split(/ (.+)/);
    if (splitted[0].toUpperCase() === 'NEW') {
        if (splitted.length > 1) {
            expdMessage = splitted[1]
        }
    	list = []
        message.reply('Time for a new expedition, woop woop :D');
  	}
    else if (splitted[0].toUpperCase() === 'ADD') {
        if (list.length < 10) {
            list.push(splitted[1])
            var listString = '\n' + expdMessage + '\n'
            for (i = 0; i < list.length; i++) {
              listString += (i+1) + ". " + list[i] + "\n";
            }
            message.reply(listString);
        }
        else {
    	    message.reply('List is full =[');
        }
  	}
    else if (splitted[0].toUpperCase() === 'REMOVE') {
        var index = list.indexOf(splitted[1])
        if (index != -1) {
            list.splice(index, 1)
            var listString = '\n'
            for (i = 0; i < list.length; i++) {
              listString += (i+1) + ". " + list[i] + "\n";
            }
            message.reply(listString);
        }
  	}
    else if (splitted[0].toUpperCase() === 'HELP') {
        message.reply('\n ---Commands--- \n new <message>              (start a new expd list) \n add <name>                 (adds <name> to list) \n remove <name>              (removes <name> from list. must be exact) \n show                       (shows current list)');
  	}
    else if (splitted[0].toUpperCase() === 'WHIP') {
        if (rand < 0.3) {
    	    message.reply('*' + splitted[1] + ' was whipped recklessly*');
        }
        else if (rand < 0.4) {
    	    message.reply('*you put whipcream all over ' + splitted[1] + 's naked body <3*');
        }
        else {
            message.reply('*plan backfired, ' + splitted[1] + ' whipped you like a bitch*');
        }
        rand = Math.random()
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
