const Discord = require('discord.js');
const fs = require('fs');
let config = require('../../config.json');


module.exports = {
    name: 'help',
    description: "Shows you all of Asphodel's commands.",
    execute(client, message, args) {
        const response = new Discord.MessageEmbed()
            .setColor('#ff0049')
            .setThumbnail()
            .setTitle(`${client.user.username} Bot Commands`)
            .setTimestamp();


        for (const command of client.commands.values()) {
            response.addField(`**\`${config.prefix}${command.name}\`**`, command.description)
        }
        message.channel.send(response);
    },
};