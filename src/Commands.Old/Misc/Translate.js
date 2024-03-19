const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const translate = require("translate");

translate.key = process.env.deepl;
translate.engine = "deepl";
let translatedText = " "

module.exports = {
	data: new SlashCommandBuilder()
		.setName("translate")
		.setDescription("Translates Your Message To A Language Of Your Choice")
		.addStringOption((option) =>
			option
				.setName("language")
				.setDescription(
					"ISO Code Or Full Name Of The Language To Translate Into (e.g: pl = Poland, gb = U.K us = U.S.A)"
				)
				.setRequired(true)
		)
		.addStringOption((option) =>
			option
				.setName("text")
				.setDescription("Text To Translate")
				.setRequired(true)
		),
	async execute(interaction) {
		const originalText = interaction.options.getString("text");
		const countryCode = interaction.options.getString("language");

		const translatingEmbed = new MessageEmbed()
			.setColor("#F85056")
			.setTitle("Translating <a:loading:1004105966897332346>")
			.setTimestamp();

		await interaction.reply({ embeds: [translatingEmbed] });

		const errorEmbed = new MessageEmbed()
		.setColor("#F85056")
		.setTitle("There Was An Error In Translating")
		.setTimestamp(); 

		try {
			translatedText = await translate(originalText, countryCode);
		} catch (err) {
			console.log(err)
			await interaction.editReply({ embeds: [errorEmbed] });
			setTimeout(() => interaction.deleteReply(), 5000);
		}

		const originalEmbed = new MessageEmbed()
			.setColor("#F85056")
			.setTitle("Original Text")
			.setDescription(originalText)
			.setTimestamp();
		const translatedEmbed = new MessageEmbed()
			.setColor("#F85056")
			.setTitle("Translated Text")
			.setDescription(translatedText)
			.setTimestamp();

		await interaction.editReply({ embeds: [originalEmbed, translatedEmbed] });
	},
};
