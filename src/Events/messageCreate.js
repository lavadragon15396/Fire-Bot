module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
        const badWords = ['nigger', 'nigga', 'faggot', 'pakki', 'paki', 'pakky', 'paky', 'negro', 'abbie', 'hebe',  ];

        if (badWords.some(v => message.content.includes(v))) {
            message.delete()
        }
    },
};

// auto reactions
//if (message.author.id === '651472179057262630') {
//    message.react('🔥');
//};
//if (message.author.id === '439870891543756831') {
//    message.react('🔥');
//};
//if (message.author.id === '782313476357881877') {
//    message.react('🐦');
//};

// if (badWords.some(v => message.content.includes(v))) {
//     console.log(`Match using "${message.content}"`);
// } else {
//     console.log(`No match using "${message.content}"`);
// }