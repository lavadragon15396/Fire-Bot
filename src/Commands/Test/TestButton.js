const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('testbutton')
        .setDescription('Sends You Some Buttons'),
    async execute(interaction) {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(`red-button`)
                    .setLabel(`Red`)
                    .setStyle("DANGER"),

                new MessageButton()
                    .setCustomId(`green-button`)
                    .setLabel(`Green`)
                    .setStyle("SUCCESS"),

                new MessageButton()
                    .setCustomId(`blue-button`)
                    .setLabel(`Blue`)
                    .setStyle("PRIMARY"),
            );

            await interaction.reply({ content: `Click Buttons To Get Colours!`, components: [row]});
    },
};