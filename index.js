const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'SELVER02.aternos.me', 
        port: 23397,
        username: 'Guard_Bot',
        version: '1.21.1'
    });

    bot.on('spawn', () => {
        console.log('Bot joined!');
        setInterval(() => {
            bot.setControlState('jump', true);
            setTimeout(() => bot.setControlState('jump', false), 500);
        }, 30000); 
    });

    bot.on('error', (err) => console.log(err));
    bot.on('end', () => setTimeout(createBot, 5000));
}

createBot();
