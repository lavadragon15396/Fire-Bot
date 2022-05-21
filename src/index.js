//TODO make user and server info commands combined
//TODO make help command
//TODO make work on multiple servers
//TODO port all commands from old bot
//TODO make music bot capabilities 

const { Client, Intents, Collection } = require('discord.js');
const fs = require('fs');
const client = new Client({ intents: 32767 })

client.commands = new Collection();
client.buttons = new Collection();

require('dotenv').config();

const functions = fs.readdirSync('./src/Functions').filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync('./src/Events').filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync('./src/Commands');


(async () => {
    for (file of functions) {
        require(`./Functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./src/Events");
    client.handleCommands(commandFolders, "./src/Commands");
    client.handleButtons();
    client.login(process.env.token);
    client.dbLogin();
})();