const Discord = require("discord.js");
const {token, prefix} = require("./config.json");
const client = new Discord.Client();

client.once('ready', () => {
	console.log(`Error 404 is active in ${client.guilds.size} server(s)!!`);
	client.user.setActivity("Porn || Prefix is rr", {type: "STREAMING"});
});
