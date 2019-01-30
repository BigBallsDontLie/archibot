const Discord = require('discord.js');
const client = new Discord.Client();

var list = []

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Good morning') {
    	message.reply('Good morning sunshine <3');
  	}
    var splitted = message.content.split(/ (.+)/);
    if (splitted[0] === 'new') {
    	list = []
  	}
    else if (splitted[0] === 'add') {
            list.push(splitted[1])
            var listString = '\n'
            for (i = 0; i < list.length; i++) {
              listString += (i+1) + ". " + list[i] + "\n";
            }
            message.reply(listString);
        message.reply(list.length);
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
