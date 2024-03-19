const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("shoot")
		.setDescription("Shoot Someone With Text")
		.addUserOption((option) =>
			option
				.setName("target")
				.setDescription("The User To Shoot")
				.setRequired(true)
		),
	async execute(interaction) {
		const member = interaction.options.getMember("target");
		const shootEmbed = new MessageEmbed()
			.setTitle(`**▄︻̷̿┻̿═━一**         ᐨ     ${member.displayName}`)
			.setColor("f85056")
			.setTimestamp();

		await interaction.reply({ embeds: [shootEmbed] });
	},
};
