const { Command } = require("discord.js-commando");

module.exports = class SpamCommand extends Command {
	constructor(client){
        super(client, {
            name: 'spam',
            memberName: 'spam',
            aliases: [],
            group: 'standard',
            guildOnly: true,
            description: 'Make someone commit alt+f4',
            usage: 'spam <text>',
            args: [
				{
                    key: 'text',
                    prompt: 'Please provide text to spam',
					type: 'string',
				},
				{
                    key: 'amount',
                    prompt: 'Please provide amount to spam. 1-500',
					type: 'string',
					default: '100',
					validate: amount => amount > 0 && amount <= 500  
				}
			],
			throttling: {
				usages: 5,
				duration: 60,
			},
        })
    }
	async run(message, { text, amount }) {
		let spamMessage = []
        for (let i = 0; i < amount; i++){
            spamMessage.push(text)
        }
        
        message.say(spamMessage.join('\n'))
        
	}
};

