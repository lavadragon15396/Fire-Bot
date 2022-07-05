const { SlashCommandBuilder } = require("@discordjs/builders");
const {
	MessageActionRow,
	MessageSelectMenu,
	MessageButton,
	MessageEmbed,
} = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("help")
		.setDescription("A List Of All Commands"),
	async execute(interaction) {
		const row1 = new MessageActionRow().addComponents(
			new MessageSelectMenu()
				.setCustomId("category-select")
				.setPlaceholder("Select A Category")
				.setMaxValues(1)
				.setMinValues(1)
				.addOptions([
					{
						label: `Information`,
						value: `info`,
					},
					{
						label: `Fun`,
						value: `fun`,
					},
					{
						label: `Moderation`,
						value: `mod`,
					},
					{
						label: `Miscellanious`,
						value: `misc`,
					},
					{
						label: `Test`,
						value: `test`,
					},
				])
		);

		const row2 = new MessageActionRow().addComponents(
			new MessageButton()
				.setLabel(`Bot Invite`)
				.setStyle("LINK")
				.setURL(
					"https://discord.com/api/oauth2/authorize?client_id=946121908099907634&permissions=8&scope=bot%20applications.commands"
				)
				.setEmoji("993975958589689997")
		);

		const helpEmbed = new MessageEmbed()
			.setTitle("FireBot Help")
			.setThumbnail(
				"https://github.com/lavadaragon15396/Fire-Bot/blob/master/Icons/icon%20glow.png?raw=true"
			)
			.addField(
				"\u200B",
				"Please Select A Category In The Select Menu Or Click On The Button For A Link To Invite This Bot"
			)
			.setColor("f85056")
			.setTimestamp();

		interaction.reply({
			embeds: [helpEmbed],
			components: [row1, row2],
		});
	},
};
