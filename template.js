const { SlashCommandBuilder } = require("@discordjs/builders");
const {
	MessageActionRow,
	MessageSelectMenu,
	MessageButton,
	MessageEmbed,
} = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("Name") // Name
		.setDescription("Description"), // Description
	async execute(interaction) {
		// Main code
	},
};