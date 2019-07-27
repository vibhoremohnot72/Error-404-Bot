const Discord = require("discord.js");
const {token, prefix} = require('./config.json');
const fs = require('fs');
const client = new Discord.Client();

client.once('ready', () => {
	console.log(`Error 404 is active in ${client.guilds.size} server(s)!!`);
	client.user.setActivity("Porn || Prefix is rr", {type: "STREAMING"});
});

client.commands = new Discord.Collection();
fs.readdir("./commands/", (err,files) => {
	if (err) console.log(err);
	let jsfiles = files.filter(f => f.split(".").pop() === "js");

	if (jsfiles.length <= 0){
		console.log("There are no commands to load!!");
	}

	jsfiles.forEach((f,i) => {
		let props = require(`./commands/${f}`);
		client.commands.set(props.name, props);
	})
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		client.commands.get('ping').execute(message, args);
	}
});

client.login(token);
