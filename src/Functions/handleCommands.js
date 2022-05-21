const {REST} = require('@discordjs/rest');
const {Routes} = require('discord-api-types/v9');
const fs = require('node:fs');

module.exports = (client) => {
    client.handleCommands = async (commandFolders, path) => {
        client.commandArray = [];
        for (folder of commandFolders) {
            const commandFiles = fs.readdirSync(`${path}/${folder}`).filter(file => file.endsWith(".js"));

            for (const file of commandFiles) {
                const command = require(`../Commands/${folder}/${file}`);
                client.commands.set(command.data.name, command);
                client.commandArray.push(command.data.toJSON());
            }
        }
        
        const rest = new REST({
            version: '9'
        }).setToken(process.env.token);

        (async () => {
            try {
                console.log('[2mStarted refreshing application (/) commands.[0m');

                await rest.put(
                    Routes.applicationGuildCommands(process.env.clientId, process.env.guildId), {
                        body: client.commandArray
                    },
                );

                console.log('[2mSuccessfully reloaded application (/) commands.[0m');
            } catch (error) {
                console.error(error);
            }
        })();
    };
};