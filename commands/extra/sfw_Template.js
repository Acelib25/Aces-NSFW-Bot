const { Command } = require("discord.js-commando");

module.exports = class tempCommand extends Command {
	constructor(client){
        super(client, {
            name: 'tempsfw',
            memberName: 'tempsfw',
            group: 'extra',
            guildOnly: true,
            description: 'tempsfw',
            usage: 'tempsfw',
            hidden: true,
        })
    }
	run(message) {
		
	}
};