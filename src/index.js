//TODO make help command
//TODO make work on multiple servers
//TODO port all commands from old bot
//* accent colour    F85056
//* accent colour 2  F89050
//* escape symbol    

const { Client, Intents, Collection } = require("discord.js");
const fs = require("fs");
const client = new Client({ intents: 32767 });

client.commands = new Collection();
client.buttons = new Collection();
client.menus = new Collection();

require("dotenv").config();

const functions = fs
	.readdirSync("./src/Functions")
	.filter((file) => file.endsWith(".js"));
const eventFiles = fs
	.readdirSync("./src/Events")
	.filter((file) => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./src/Commands");

(async () => {
	for (file of functions) {
		require(`./Functions/${file}`)(client);
	}
	client.handleEvents(eventFiles, "./src/Events");
	client.handleCommands(commandFolders, "./src/Commands");
	client.handleButtons();
	client.handleMenus();
	client.login(process.env.token);
	client.dbLogin();
})();
