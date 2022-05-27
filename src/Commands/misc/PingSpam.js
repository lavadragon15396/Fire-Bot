const {
    SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('spamping')
        .setDescription('Spam Pings Someone')
        .addUserOption(option => option.setName('target').setDescription('The User To Ping')),
    async execute(interaction) {
        const member = interaction.options.getMember('target');
        if (interaction.user.id == '651472179057262630') {
            var spam = true
            var i = 0
            await interaction.reply(`<@${member.id}>`)
            while (1 < 10) {
                await interaction.followUp(`<@${member.id}>`)
                i++
            }
        } else {
            await interaction.reply('You Do Not Have Permission To Do This')
        }
    },
};