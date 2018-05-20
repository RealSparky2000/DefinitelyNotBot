const Discord = require('discord.js');
const client = new Discord.Client();

bot.on('ready', () => {
    console.log('I am ready!');
});

bot.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  }
        
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});
bot.login(BOT_TOKEN);
