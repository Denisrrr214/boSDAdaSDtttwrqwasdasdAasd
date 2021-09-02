module.exports.run = async (bot, message, args) => {
    
    const Discord   = require('discord.js');
    const fs        = require('fs');
  const db = require('quick.db');
const rs = require('randomstring');
const date = require('date-and-time')
const hastebin = require('hastebin')
const ms = require('ms')

  if (message.channel.type == "dm") return;
    message.delete()

    let balance = db.fetch(`money_${message.guild.id}_${message.author.id}`)
    if (balance === null) balance = 0;
	
	let bank = await db.fetch(`bank_${message.guild.id}_${message.author.id}`)
    if (bank === null) bank = 0;

   const Embed = new discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL()) 	    
		.setDescription(`${client.l.eco.bal.wallet} ${client.config.economy.currency}${balance} \n${client.l.eco.bal.bank} ${client.config.economy.currency}${bank}`)
        .setFooter(client.l.eco.footer.replace('%SERVERNAME%', client.config.serverName).replace('%USER%', message.author.username))
		.setColor(client.config.colour)
	message.channel.send(Embed);

} 






module.exports.config = {
    command: "bal"
}