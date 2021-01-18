const createCheckMember = (guildId) => {
	const guild = client.guilds.cache.get(guildId)
	return (msg) => {
		if (!!guild.members.cache.get(msg.author.id)) return true

		msg.channel.send('Please visit https://discord.gg/aEjYV9KM');
		return false
	}
}

module.exports = {
	createCheckMember,
};