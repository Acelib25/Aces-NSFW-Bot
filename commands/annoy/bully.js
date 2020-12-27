const Discord = require('discord.js')
const { Command } = require("discord.js-commando");
const Canvas = require('canvas');

module.exports = class BullyCommand extends Command {
	constructor(client){
        super(client, {
            name: 'bully',
            memberName: 'bully',
            aliases: ['bully'],
            group: 'standard',
            guildOnly: true,
            description: 'Bully',
            usage: 'bully <user> \n',
            args: [
				{
                    key: 'user',
                    prompt: 'Please provide a mention or id',
                    type: 'user',
                },
				{
                    key: 'reason',
                    prompt: 'Please provide a reason to bully',
                    type: 'string',
                    default: false,  
                }
            ],
            throttling: {
				usages: 10,
				duration: 60,
			},
        })
    }
	async run(message, { user, reason }) {
        message.say(`${message.author.username} bullied ${user.username} because ${reason}`)
    }
}