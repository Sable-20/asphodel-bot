const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Some form of help.',
    execute(client, message, args) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#e42953')
            .setThumbnail()
            .setTitle('<:TickNo_Night:678620575761039400> Server Startup Error Format')
            .addFields({ name: 'SODA Discord Bot Commands', value: '\u200B' }, { name: 'Inline field title', value: 'Some value here', inline: true }, { name: 'Inline field title', value: 'Some value here', inline: true }, { name: 'Inline field title', value: 'Some value here', inline: true }, { name: 'Inline field title', value: 'Some value here', inline: true }, { name: 'Inline field title', value: 'Some value here', inline: true }, { name: 'Inline field title', value: 'Some value here', inline: true }, )
            .addField('\u200B', ' \u25AB Yet another point to point out', true)
            .setTimestamp();

        message.channel.send(exampleEmbed);
    },
};