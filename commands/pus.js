module.exports.run = async (bot, message, args) => {
const { get } = require("snekfetch");
  const superagent = require('superagent')
    const Discord = require('discord.js');
  const client = require('discord.js')
    if (message.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'pussy'})
    .end((err, response) => {
      message.channel.send({ file: response.body.message });
    });
  } else {
    message.channel.send("This isn't NSFW channel!")
  }
  }
module.exports.config = {
    command: "pussy"
}