const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("unlock")
		.setDescription("Unlocks The Channel")
		.addChannelOption((option) =>
			option
				.setName("channel")
				.setDescription("Channel To Unlock")
				.setRequired(true)
		),
	async execute(interaction) {
		const noUserPerms = new MessageEmbed()
			.setTitle("You do not have the permission to do this")
			.setColor("F85056")
			.setTimestamp();

		if (!interaction.member.permissions.has(`MANAGE_CHANNELS`))
			return interaction.reply({ embeds: [noUserPerms] });
		let channel = interaction.options.getChannel("channel");

		const Locked = new MessageEmbed()
			.setTitle(`Unlocked ${channel.name}`)
			.setColor("F85056")
			.setTimestamp();

		await channel.permissionOverwrites.create(
			interaction.guild.roles.everyone,
			{
				SEND_MESSAGES: true,
			}
		);
		interaction.reply({ embeds: [Locked] });
	},
};
