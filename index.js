const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const token = config.token;
const prefix = config.prefix;

client.on('ready', () => {
	console.log('Ya estoy aqui');
});

client.on('message', async message => {
	if (message.content.startsWith(prefix + 'hola')) {
		message.reply('Hola :D');
	}
});

client.on('message', async message => {
  var msg = message.content
  var fmsg = msg.split("-say");
  if (message.content.startsWith(prefix + 'say')) {
	  message.channel.send(fmsg)
	}
});



client.login(token);