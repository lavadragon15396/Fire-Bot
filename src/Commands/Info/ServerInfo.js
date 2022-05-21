const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('serverinfo')
        .setDescription('Replies With Info About The Server'),
    async execute(interaction) {
        const infoEmbed = new MessageEmbed()
            .setTitle('Server Info')
            .setColor('FF8B00')
            .setTimestamp()
            .addFields({
                name: 'Server Name',
                value: `${interaction.guild.name}`,
                inline: true
            }, {
                name: 'Member Count',
                value: `${interaction.guild.memberCount}`,
                inline: true
            }, )

        await interaction.reply({embeds: [infoEmbed]});
    },
};