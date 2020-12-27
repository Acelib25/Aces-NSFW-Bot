//Required Stuffs
const fs = require('fs');
const Discord = require('discord.js');
const { CommandoClient, SQLiteProvider } = require('discord.js-commando');
const path = require('path');
const package = require('./package.json')
const config = require('./config.json');
const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

//Make client
const client = new CommandoClient({
	commandPrefix: config.prefix,
	owner: '344143763918159884',
	invite: 'https://discord.gg/nFuQAtTRjN',
});

//Set SQLite DB
open({
  	filename: './settings.sqlite',
  	driver: sqlite3.Database
}).then((db) => {
	client.setProvider(new SQLiteProvider(db));
})

//Commands setup
client.registry
	.registerDefaultTypes()
	.registerGroups([
		['standard', 'Standard Commands'],
		['admin', 'Mod and Admin Commands']
	])
	.registerDefaultGroups()
    .registerDefaultCommands()
    //.registerDefaultCommands({unknownCommand: false})
	.registerCommandsIn(path.join(__dirname, 'commands'));

//On ready messages and startup
client.once('ready', async () => {
	console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
	fs.writeFile("./serverList.txt", `Currently operating in ${client.guilds.cache.size} servers.\n\n${client.guilds.cache.array().join('\n')}`,(err) => {
		if(err) throw err;
		console.log('Server File Updated!');
	  });
	client.user.setPresence({
        activity: {
            name: `Help: ${config.prefix}help | Version: ${package.version}`,
            type: "PLAYING",
        }
    });
});

//Runs on Command Error
client.on('commandError', (cmd, error) => {
	console.error(`Oopsies, ${cmd} did a fuckywucky :(\n\n`)
	console.error(error)
});

//Runs when command ran
client.on('commandRun', async (command, promise, message, args) =>{; 
	let argsKey = Object.keys(args)
	let argsValue = Object.values(args)
	let argsList = []
	for(let i = 0; i < argsKey.length; i++){
		argsList.push(`[${argsKey[i]}: ${argsValue[i]}]`)
	}
	const feedbackEmbed =  new Discord.MessageEmbed()
		.setColor('#ff4800')
		.setTitle(`${message.author.tag} ran a command`)
		.addFields(
			{ name: 'Command', value: command.name },
			{ name: 'Args', value: argsList},
			{ name: 'Guild', value:  `${message.guild.name}(${message.guild.id})`},
		)
		.setTimestamp()
	client.guilds.cache.get('747587696867672126').channels.cache.get('747587927261052969').send(feedbackEmbed)
});

//Runs when a message is sent by anyone
client.on('message', async message => {
	
})

//Once all is setup it logs on the bot.
client.login(config.token);