const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');

const commands = [
	{
		name: 'ping',
		description: 'Replies with Pong!',
	},
];

const rest = new REST({ version: '10' }).setToken('token');

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands });

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();