const Discord = require('discord.js');
const client = new Discord.Client();

var list = []
var expdMessage = ""
var rand = 0

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    var msg = message.content.toUpperCase()
    if (msg === 'GOOD MORNING') {
    	message.reply('Good morning sunshine <3');
  	}
    if (msg === 'YOU SUCK') {
    	message.reply('But you swallow');
  	}
    if (msg === 'I LOVE YOU') {
        if (rand < 0.6) {
    	    message.reply('And I love you <3');
        }
        else {
    	    message.reply('Uhm.. I only see you as an friend. Sorry.');
        }
        rand = Math.random()
  	}
    if (msg === 'WHAT IS LOVE?') {
    	message.reply('BABY DONT HURT ME </3');
  	}
    if (msg === 'DONT HURT ME') {
    	message.reply('NO MORE </3');
  	}
    if (msg === 'I WANNA KNOW WHAT LOVE IS') {
    	message.reply('I WANT YOU TO SHOW ME <3');
  	}
    if (msg === 'CUT MY LIFE INTO PIECES') {
    	message.reply('DIS IS MA LAST RESORT');
  	}
    if (msg === 'SUFFOCATION') {
    	message.reply('NO BREATHIN');
    	message.reply('DUN GIVE A FOOK IF I CUT ME ARM BLEEDIN');
  	}
    if (msg === 'SHOW') {
    	var listString = '\n'
            for (i = 0; i < list.length; i++) {
              listString += (i+1) + ". " + list[i] + "\n";
            }
            message.reply(listString);
  	}
    var splitted = message.content.split(/ (.+)/);
    if (splitted[0].toUpperCase() === 'NEW') {
        expdMessage = splitted[1]
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
        if (rand < 0.4) {
    	    message.reply('*' + splitted[1] + ' was whipped recklessly*');
        }
        else {
            message.reply('*plan backfired, ' + splitted[1] + ' whipped you like a bitch*');
        }
        rand = Math.random()
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
