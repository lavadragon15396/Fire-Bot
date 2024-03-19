const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageSelectMenu } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("testmenu")
		.setDescription("Sends You A Menu"),
	async execute(interaction) {
		const row = new MessageActionRow().addComponents(
			new MessageSelectMenu()
				.setCustomId("colour-select")
				.setPlaceholder("Select A Colour")
				.setMaxValues(1)
				.setMinValues(1)
				.addOptions([
					{
						label: `Red`,
						value: `#ED4245`,
					},
					{
						label: `Green`,
						value: `#3ba55c`,
					},
					{
						label: `Blue`,
						value: `#5865F2`,
					},
				])
		);
		await interaction.reply({
			content: `Click Buttons To Get Colours!`,
			components: [row],
		});
	},
};
