const Discord = require('discord.js');

module.exports = {
    name: 'reload',
    description: 'Reloads Asphodel.',
    execute(client, message, args) {
        const response = new Discord.MessageEmbed()
            .setColor('#ff0049')
            .setTitle(`💢 Command is currently empty!`)
            .setDescription("`reload` command does not have any function yet as of the moment.")
            .setTimestamp();
        message.channel.send(response);
    },
};