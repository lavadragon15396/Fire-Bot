const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("clear")
		.setDescription("Clears Specified Number Of Messages")
		.addIntegerOption((option) =>
			option
				.setName("number")
				.setDescription("The Number Of Messages To Clear")
				.setRequired(true)
		),
	async execute(interaction) {
		const noUserPerms = new MessageEmbed()
			.setTitle("You do not have the permission to do this")
			.setColor("F85056")
			.setTimestamp();
		const tooBigOrSmall = new MessageEmbed()
			.setTitle("Please give a number between 1 and 100")
			.setColor("F85056")
			.setTimestamp();
		const unableToDeleteTooOld = new MessageEmbed()
			.setTitle(
				"I was unable to clear the amount of messages given, please make sure they are less than 2 weeks old"
			)
			.setColor("F85056")
			.setTimestamp();

		if (!interaction.member.permissions.has("MANAGE_MESSAGES"))
			return await interaction.reply({
				embeds: [noUserPerms],
			});

		const amountToDelete = interaction.options.getInteger("number");
		if (amountToDelete < 1 || amountToDelete > 100)
			return await interaction.reply({
				embeds: [tooBigOrSmall],
			});
		const fetchedMessages = await interaction.channel.messages.fetch({
			limit: amountToDelete,
		});

		const deletedMessages = new MessageEmbed()
			.setTitle(`Deleted ${amountToDelete} messages`)
			.setColor("F85056")
			.setTimestamp();

		try {
			await interaction.channel.bulkDelete(fetchedMessages);
			await interaction.reply({
				embeds: [deletedMessages],
			});
		} catch (err) {
			await interaction.reply({
				embeds: [unableToDeleteTooOld],
			});
			await delay(2000);
			await interaction.deleteReply();
		}
	},
};
