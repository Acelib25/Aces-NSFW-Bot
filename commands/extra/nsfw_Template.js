const { Command } = require("discord.js-commando");

module.exports = class tempCommand extends Command {
	constructor(client){
        super(client, {
            name: 'temp',
            memberName: 'temp',
            group: 'extra',
            guildOnly: true,
            description: 'temp',
            usage: 'temp',
            nsfw: true,
            hidden: true,
            
        })
    }
	run(message) {
		
	}
};