const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require(`node-fetch`);
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('meme')
        .setDescription('Replies With A Random Meme!'),
    async execute(interaction) {
        start().then(memeEmbed => {
            interaction.reply({embeds: [memeEmbed]})
        });
    },
};

async function start() {
    return fetch(`https://meme-api.herokuapp.com/gimme`)
        .then(res => res.json())
        .then(json => {
            const memeEmbed = new MessageEmbed()
                .setTitle(json.title)
                .setURL(json.postLink)
                .setImage(json.url)
                .setColor('f85056')
                .setFooter({
                    text: `r/${json.subreddit} | OP : ${json.author} | ${json.ups} upvotes`,
                })
                .setTimestamp();


            if (json.nsfw) return start().then(console.log(`The meme ${json.postLink} was blocked because it is NSFW`));
            return memeEmbed;
        })
}