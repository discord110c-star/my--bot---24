const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'SELVER02.aternos.me', 
        port: 23397,
        username: 'Guard_Bot',
        version: '1.21.11'
    });

    bot.on('spawn', () => {
        console.log('Bot joined and is active');
        
        setInterval(() => {
            bot.swingArm('right');
            bot.setControlState('jump', true);
            setTimeout(() => bot.setControlState('jump', false), 500);
        }, 20000); 
    });

    bot.on('error', (err) => console.log(err));
    bot.on('end', () => {
        console.log('Disconnected, reconnecting...');
        setTimeout(createBot, 5000);
    });
}

createBot();
