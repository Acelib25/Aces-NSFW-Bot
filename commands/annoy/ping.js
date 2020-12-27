const { Command } = require("discord.js-commando");

module.exports = class pingCommand extends Command {
	constructor(client){
        super(client, {
            name: 'randomping',
            memberName: 'randomping',
            group: 'annoy',
            guildOnly: true,
            description: 'Ping a random person',
            usage: 'ping',
            hidden: true,
            throttling: {
				usages: 1,
				duration: 600,
            },
            
        })
    }
	async run(message) {
        message.delete()
        let randomPer = message.guild.members.cache.random().user;
        console.log(`Poor ${randomPer.username} was pinged. F`)
        let msg = await message.channel.send(`${randomPer}`)
        msg.delete()
	}
};