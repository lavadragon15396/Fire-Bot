const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('A List Of All Commands'),
    async execute(interaction) {
        
    },
};