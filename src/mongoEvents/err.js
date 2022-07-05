module.exports = {
	name: "err",
	once: true,
	async execute(error) {
		console.log(error);
	},
};
