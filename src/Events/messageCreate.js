const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "messageCreate",
	async execute(message, client) {
		const badWords = [
			"nigger",
			"nigga",
			"niggo",
			"neega",
			"neegro",
			"faggot",
			"fagot",
			"pakki",
			"paki",
			"negro",
			"retard",
			"retarded",
		];
		const dontSlur = new MessageEmbed()
			.setTitle(`Don't Slur ${message.author.username}`)
			.setColor("F85056")
			.setTimestamp();

		if (badWords.some((v) => message.content.includes(v))) {
			message.delete();
			message.channel.send({
				embeds: [dontSlur],
			});
			message.channel.send({
				content: `${message.author}`,
			});
		}
	},
};

//   auto reactions
// if (message.author.id === '651472179057262630') {
//     message.react('🔥');
// };
// if (message.author.id === '439870891543756831') {
//     message.react('🔥');
// };
// if (message.author.id === '782313476357881877') {
//     message.react('🐦');
// };

//   log if is a slur
// if (badWords.some(v => message.content.includes(v))) {
//     console.log(`Match using "${message.content}"`);
// } else {
//     console.log(`No match using "${message.content}"`);
// }