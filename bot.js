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
        var listString = ''
        for (i = 0; i < list.length; i++) {
          listString += i + ". " + splitted[1] + "<br>";
        }
    	message.reply(listString);
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
