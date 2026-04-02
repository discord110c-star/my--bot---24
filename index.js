const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
    host: 'blackfish.aternos.host', 
    port: 23397,
    username: 'BodyGuard', 
    auth: 'offline',
    version: false,
    checkTimeoutInterval: 60000
});

bot.on('spawn', () => {
    console.log('SUCCESS: Bot is in!');
    setInterval(() => {
        bot.swingArm('right');
    }, 10000);
});

bot.on('error', (err) => {
    console.log('Error:', err.message);
});

bot.on('end', () => {
    console.log('Reconnecting...');
});
