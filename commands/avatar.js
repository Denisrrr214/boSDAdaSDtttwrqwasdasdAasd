module.exports.run = async (bot, message, args) => {
  const Discord = require("discord.js");
  const fs = require("fs");

  //Code Start
  if (message.channel.type == "dm") return;
  let user = message.mentions.users.first();
  if (!user) user = message.author;

  const embed = new Discord.RichEmbed()
    .setDescription("Avatar Link: [Click here](" + user.displayAvatarURL + ")")
    .setImage(user.avatarURL)
    .setColor(`RANDOM`);
  message.channel.send({ embed });

  //Code End
};

module.exports.config = {
  command: "avatar"
};
