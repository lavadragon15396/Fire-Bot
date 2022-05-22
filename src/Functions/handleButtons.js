const fs = require('fs');

module.exports = (client) => {
    client.handleButtons = async () => {
        const buttonFolders = fs.readdirSync('./src/Buttons');
        for (const folder of buttonFolders) {
            const buttonFiles = fs.readdirSync(`./src/Buttons/${folder}`).filter(file => file.endsWith('.js'));
            for (const file of buttonFiles) {
                const button = require(`../buttons/${folder}/${file}`)
                client.buttons.set(button.data.name, button);
            }
        }
    }
}