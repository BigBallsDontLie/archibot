const Discord = require('discord.js');
const client = new Discord.Client();

var list = []

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    var msg = message.toUpperCase()
    if (msg === 'GOOD MORNING') {
    	message.reply('Good morning sunshine <3');
  	}
    if (msg === 'YOU SUCK') {
    	message.reply('But you swallow');
  	}
    if (msg === 'I LOVE YOU') {
    	message.reply('And I love you <3');
  	}
    if (msg === 'IS REN A DOG?') {
    	message.reply(':ren_smile:');
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
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
