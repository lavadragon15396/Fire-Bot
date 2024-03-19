const { SlashCommandBuilder } = require("@discordjs/builders");
const {	MessageEmbed } = require("discord.js");

const assetPath = "../../../Assets"

let coinName = "Heads"
let coinImage = `${assetPath}/Coins/Heads.png`

module.exports = {
	data: new SlashCommandBuilder()
		.setName("coinflip")
		.setDescription("Flips A Coin"),
	async execute(interaction) {
		const coin = Math.floor(Math.random() * 2);

        if (coin === 0) {
            coinName = "Heads"
            coinImage = `https://raw.githubusercontent.com/lavadragon15396/Fire-Bot/master/Assets/Coins/Heads.png`
        } else {
            coinName = "Tails"
            coinImage = `https://raw.githubusercontent.com/lavadragon15396/Fire-Bot/master/Assets/Coins/Tails.png`
        }

        const embed = new MessageEmbed()
            .setTitle(coinName)
            .setImage(coinImage)
            .setColor("f85056")
            .setTimestamp();

		interaction.reply({
			embeds: [embed]
		});
	},
};