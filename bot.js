const Discord = require('discord.js');
const client = new Discord.Client();

var list = []

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
    	message.reply('And I love you <3');
  	}
    if (msg === 'WHAT IS LOVE?') {
    	message.reply('BABY DONT HURT ME </3');
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
    	list = []
        message.reply('Time for a new expedition, woop woop :D');
  	}
    else if (splitted[0].toUpperCase() === 'ADD') {
        if (list.length < 10) {
            list.push(splitted[1])
            var listString = '\n'
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
        message.reply('
                      \n ---Commands--- 
                      \n new                        (start a new expd list) 
                      \n add <name>                 (adds <name> to list) 
                      \n remove <name>              (removes <name> from list. must be exact) 
                      \n show                       (shows current list)');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
