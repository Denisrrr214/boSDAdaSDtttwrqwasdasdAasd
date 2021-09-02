module.exports.run = async (bot, message, args) => {
    
    const Discord   = require('discord.js');
    const fs        = require('fs');
  const moment = require('moment');
  let member = message.mentions.members.first() || message.member,
  user = member.user;

    //Code Start
      if (message.channel.type == "dm") return;
  const joinDiscord = moment(user.createdAt).format('llll');
    const joinServer = moment(user.joinedAt).format('llll');
    let embed = new Discord.RichEmbed()
        .setAuthor(user.username + '#' + user.discriminator, user.displayAvatarURL)
        .setColor(`RANDOM`)
        .setThumbnail(`${user.displayAvatarURL}`)
        .addField('Joined at:', `${moment.utc(user.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
        .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
        .addField("ID:", `${user.id}`, true)
        .addField("Status:", `${user.presence.status}`, true)
    .addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
       .addField('Roles:', member.roles.map(r => `${r}`).join(' | '), true)
        .setFooter(`ID: ${user.id}`)
        .setTimestamp();

    message.channel.send({ embed: embed });
  
    }
  


    //Code End



module.exports.config = {
    command: "whois"
}