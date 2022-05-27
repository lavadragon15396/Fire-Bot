module.exports = { 
    name: 'messageCreate',
    async execute(message, client) {
        if (message.author.id === '651472179057262630') {
            message.react('🔥');
        };
        if (message.author.id === '439870891543756831') {
            message.react('🔥');
        };
    },
};