const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'avatar!',
    execute(client, message, args) {
        if (args[0] == null) {
            message.reply(`**Incomplete parameters!** This command works in this format:\n\n${prefix}avatar \`[Discord User ID]\` \`[Image Size]\`*(optional)*`);
            return;
        }
        const theUsersID = args[0];
        const size = args[1] ? parseInt(args[1]) : 4096;

        client.users.fetch(theUsersID).then(myUser => {
            console.log(myUser.avatarURL());

            const response = new Discord.MessageEmbed()

            if (myUser.displayAvatarURL({ dynamic: true }).endsWith('.gif')) {
                response.setImage(myUser.avatarURL({ size: size, dynamic: true }))
                    .setDescription(`Image Size: ${size}\nAnimated: true\nUser ID: ${theUsersID}\nAvatar ID: ${myUser.avatar}`);
            } else {
                response.setImage(myUser.avatarURL({ size: size }))
                    .setDescription(`Image Size: ${size}\nAnimated: false\nUser ID: ${theUsersID}\nAvatar ID: ${myUser.avatar}`);
            }

            response.setTimestamp();

            message.channel.send(response);
        });
    },
};