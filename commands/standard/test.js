const { Command } = require("discord.js-commando");

module.exports = class TestCommand extends Command {
	constructor(client){
        super(client, {
            name: 'test',
            memberName: 'test',
            group: 'standard',
            guildOnly: true,
            description: 'test command',
            usage: 'test',
            
        })
    }
	run(message) {
        message.channel.send("Test")
        console.log("Test")
	}
};