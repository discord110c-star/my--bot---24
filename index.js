const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
    host: 'blackfish.aternos.host', 
    port: 23397,
    username: 'BodyGuard', 
    auth: 'offline'
});

bot.on('spawn', () => console.log('Bot is IN!'));
bot.on('error', (err) => console.log('Error:', err.message));
bot.on('end', () => console.log('Disconnected'));
