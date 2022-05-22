const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rps')
        .setDescription('Rock Paper Scissors!')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The input to echo back')
                .addChoices({ name: 'Rock 🪨', value: 'Rock'},
                            { name: 'Paper 📃', value: 'Paper'},
                            { name: 'Scissors ✂️', value: 'Scissors'})
                .setRequired(true)),
    async execute(interaction) {
        const userChoice = interaction.options.getString('input');
        const botChoice = Math.floor(Math.random() * 3) + 1;

        let botEmoji;
        let userEmoji;
        let botChoiceStr;

        if (botChoice == 1) {
            botChoiceStr = 'Rock';
            botEmoji = '🪨 Rock';
        }
        if (botChoice == 2) {
            botChoiceStr = 'Paper';
            botEmoji = '📃 Paper';
        }
        if (botChoice == 3) {
            botChoiceStr = 'Paper';
            botEmoji = '✂️ Scissors';
        }

        if (userChoice == 'Rock') userEmoji = '🪨 Rock';
        if (userChoice == 'Paper') userEmoji = '📃 Paper';
        if (userChoice == 'Scissors') userEmoji = '✂️ Scissors';

        const draw = new MessageEmbed()
            .setTitle(`Rock - Paper - Scissors!`)
            .setDescription(`${userEmoji}  \*\*VS\*\*  ${botEmoji}\nIts a Draw!`)
            .setColor(`FF8B00`)
            .setTimestamp();
        const uWin = new MessageEmbed()
            .setTitle(`Rock - Paper - Scissors!`)
            .setDescription(`${userEmoji}  \*\*VS\*\*  ${botEmoji}\nYou win!`)
            .setColor(`FF8B00`)
            .setTimestamp();
        const iWin = new MessageEmbed()
            .setTitle(`Rock - Paper - Scissors!`)
            .setDescription(`${userEmoji}  \*\*VS\*\*  ${botEmoji}\nI Win!`)
            .setColor(`FF8B00`)
            .setTimestamp();

        if (botChoiceStr == userChoice) return interaction.reply({embeds: [draw]});
        if (userChoice == 'Rock') {
            if (botChoiceStr == 'Paper') return interaction.reply({embeds: [uWin]});
            else return interaction.reply({embeds: [iWin]});
        } else if (userChoice == 'Paper') {
            if (botChoiceStr == 'Scissors') return interaction.reply({embeds: [uWin]});
            else return interaction.reply({embeds: [iWin]});
        } else if (userChoice == 'Scissors') {
            if (botChoiceStr == 'Rock') return interaction.reply({embeds: [uWin]});
            else return interaction.reply({embeds: [iWin]});
        }
    },
};