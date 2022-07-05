const fs = require("fs");

module.exports = (client) => {
	client.handleMenus = async () => {
		const menuFolders = fs.readdirSync("./src/Menus");
		for (const folder of menuFolders) {
			const menuFiles = fs
				.readdirSync(`./src/Menus/${folder}`)
				.filter((file) => file.endsWith(".js"));
			for (const file of menuFiles) {
				const menu = require(`../menus/${folder}/${file}`);
				client.menus.set(menu.data.name, menu);
			}
		}
	};
};
