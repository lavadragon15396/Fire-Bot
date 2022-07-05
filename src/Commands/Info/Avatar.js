const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("avatar")
		.setDescription("Replies With The Specified User's Avatar")
		.addUserOption((option) =>
			option
				.setName("target")
				.setDescription("The User To See The Avatar Of")
				.setRequired(true)
		),
	async execute(interaction) {
		const member = interaction.options.getMember("target");
		const noMemberMentioned = new MessageEmbed()
			.setTitle(`Please Mention A Member To View The Avatar Of`)
			.setColor(`FF8B00`)
			.setTimestamp();
		const avatarEmbed = new MessageEmbed()
			.setTitle(`${member.displayName}'s avatar`)
			.setImage(member.displayAvatarURL())
			.setColor(`f85056`)
			.setTimestamp();
		if (!member) {
			await interaction.reply({ embeds: [noMemberMentioned] });
		} else {
			await interaction.reply({ embeds: [avatarEmbed] });
		}
	},
};
