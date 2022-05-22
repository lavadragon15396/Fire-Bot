module.exports = {
    data: {
        name: `red-button`
    },
    async execute (interaction, client) {
        await interaction.reply('Discord Red Hex Code:\n#ED4245')
    },
};