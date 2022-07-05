const { MessageEmbed } = require("discord.js");

module.exports = {
	data: {
		name: `category-select`,
	},
	async execute(interaction, client) {
		await interaction.values.forEach(async (value) => {
			if (value == "info") {
				const infoEmbed = new MessageEmbed()
					.setTitle("Information Commands")
					.addField(	"\u2022Avatar",	"   Replies With The Specified User's Avatar")
                    .addField("\u2022Serverinfo","    Replies With Info About The Server")
					.addField("\u2022Help", "    Replies With A List Of All Commands")
					.setColor("F89050")
					.setTimestamp();
				interaction.reply({ embeds: [infoEmbed] });
			} else if (value == "fun") {
				const funEmbded = new MessageEmbed()
					.setTitle("Fun Commands")
					.addField("\u2022Meme", "    Replies With A Random Meme")
					.addField("\u2022RPS", "    Rock Paper Scissors!")
					.addField("\u2022Shoot", "    Shoot Someone With Text")
					.setColor("F89050")
					.setTimestamp();
				interaction.reply({ embeds: [funEmbded] });
			} else if (value == "mod") {
				const modEmbed = new MessageEmbed()
					.setTitle("Moderation Commands")
					.setDescription("Only Usable With Permissions")
					.addField("\u2022Clear","    Clears The Specified Amount Of Messages")
					.addField("\u2022Lock / Unlock","    Locks / Unlocks The Specified Channel")
					.setColor("F89050")
					.setTimestamp();
				interaction.reply({ embeds: [modEmbed] });
			} else if (value == "misc") {
				const miscEmbed = new MessageEmbed()
					// .setTitle("Miscellanious Commands")
					// .addField("\u2022", "    Value")
					.setTitle("Coming Soon")
					.setColor("F89050")
					.setTimestamp();
				interaction.reply({ embeds: [miscEmbed] });
			} else if (value == "test") {
				const testEmbed = new MessageEmbed()
					.setTitle("Test Commands")
					.addField("\u2022Ping", "    Replies With Pong")
					.addField("\u2022Testbutton", "    Replies With Buttons")
					.addField("\u2022Testembed", "    Replies With An Embed")
					.addField("\u2022Testmenu", "    Replies With a Menu")
					.setColor("F89050")
					.setTimestamp();
				interaction.reply({ embeds: [testEmbed] });
			}
		});s
	},
};
