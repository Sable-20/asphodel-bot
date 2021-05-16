const Discord = require('discord.js');

module.exports = {
    category: 'Testing',
    slash: true,
    testOnly: true,
    description: 'Table tennis but with numbers.',
    callback: ({ client, message }) => {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ff0049')
            .setThumbnail()
            .setTitle(`🏓 Pong!`)
            .setFooter(`WebSocket ping is ${client.ws.ping}MS!`);
        // .setTimestamp();

        return exampleEmbed;
    },
};