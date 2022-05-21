module.exports = { 
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`\n[2mStarted Bot With Token[0m: [3m[1m${process.env.token}[0m\n[2mLogged In As[0m: [3m[1m${client.user.tag} [0m \n`);
    },
};