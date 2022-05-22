module.exports = {
    data: {
        name: `green-button`
    },
    async execute (interaction, client) {
        await interaction.reply('Discord Green Hex Code:\n#3ba55c')
    },
};