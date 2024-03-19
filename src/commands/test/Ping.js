const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("Replies With Pong!"),
	async execute(interaction, client) {
		const message = await interaction.deferReply({
			fetchReply: true
		});

		
	},
};
