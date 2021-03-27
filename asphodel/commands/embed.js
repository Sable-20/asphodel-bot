const Discord = require('discord.js');

module.exports = {
    name: 'embed',
    description: 'embed!',
    execute(client, message, args) {
        const embedPicture = args[0];

        const exampleEmbed = new Discord.MessageEmbed()
            .setImage(embedPicture)
            .setTimestamp();

        message.channel.send(exampleEmbed);
    },
};