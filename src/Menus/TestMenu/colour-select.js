module.exports = {
	data: {
		name: `colour-select`,
	},
	async execute(interaction, client) {
        let colour = "";
        await interaction.values.forEach(async (value) => {
            colour += `${value} `;
        });
		await interaction.reply(`You Chose: ${colour}`);
	},
};
