
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready' , () => {
    console.log('Bot online');
})

bot.on('message', (message) => {
    if(message.author.bot) return;
    if(message.channel.type !== 'text') return;
    let prefix = '-';
    let MessageArray = message.content.split(' ');
    let cmd = MessageArray[0].slice(prefix.length);
    let args = MessageArray.slice(1);

    if(!message.content.startsWith(prefix)) return;
    
    if(cmd == 'hallo') {
        Random = 0
        Random = Math.random();
        Random = Math.round(Random, Random);
        if(Random == 0) {
            message.channel.send(`Hallo ***${message.member.user.username}*** ๐`)
            Random = 0
        } else 
        if(Random == 1) {
            message.channel.send(`Welkom in **โBratvaโ**, ***${message.member.user.username}***!`)
            Random = 0
        }
    } else 
    if(cmd == 'infome') {
        message.channel.send(`    Name: **${message.member.user.username}**`);
        message.channel.send(`Nickname: **${message.member.nickname}**`);
        message.channel.send(`     Tag: **${message.member.user.tag}**`);
        message.channel.send(`      Id: **${message.member.user.id}**`);
        message.react("๐");
    } else
    if(cmd == 'bvlist') {
        message.channel.send('*Bratva List:*');
        message.channel.send('**-hallo**');
        message.channel.send('**-infome**');
        message.channel.send('**-bvlist**');
        message.channel.send('**(drugs)**');
        message.channel.send('**(wiet)**');
        message.channel.send('**(opium)**');
        message.channel.send('**(schiet)**');
        message.channel.send('**(pistool)**');
        message.channel.send('**(geweer)**');
    } 
})
    bot.on('message', (message) => {
        if(message.author.bot) return;
        if(message.channel.type !== 'text') return;
        let prefix = '';
        let MessageArray = message.content.split(' ');
        let cmd = MessageArray[0].slice(prefix.length);
        let args = MessageArray.slice(1);
    
        if(!message.content.startsWith(prefix)) return;
        
    if(cmd == 'drugs') {
        message.channel.send(`๐ Gebruik Drugs ***NOOIT*** ! Is Een Tip **${message.member.user.username}** ๐ `);
        message.react("๐");
    } else
    if(cmd == 'opium') {
        message.channel.send(`๐ Gebruik Drugs ***NOOIT*** ! Is Een Tip **${message.member.user.username}** ๐ `);
        message.react("๐");
    } else
    if(cmd == 'wiet') {
        message.channel.send(`๐ฟ Gebruik Drugs ***NOOIT*** ! Is Een Tip **${message.member.user.username}** ๐ฟ `);
        message.react("๐ฟ");
    } else
    if(cmd == 'schiet') {
        message.channel.send(`๐ซ Schiet, Schiet, **Raak!** ๐ซ`);
        message.react("๐ซ");
    } else
    if(cmd == 'geweer') {
        message.channel.send(`๐ซ Schiet, Schiet, **Raak!** ๐ซ`);
        message.react("๐ซ");
    } else
    if(cmd == 'pistool') {
        message.channel.send(`๐ซ Schiet, Schiet, **Raak!** ๐ซ`);
        message.react("๐ซ");
    }
})

bot.on('message', (message) => {
    if(message.author.bot) return;
    if(message.channel.type !== 'text') return;
    let prefix = '-';
    let MessageArray = message.content.split(' ');
    let cmd = MessageArray[0].slice(prefix.length);
    let args = MessageArray.slice(1);

    if(!message.content.startsWith(prefix)) return;

    if(cmd == 'avhelp') {
        if(message.channel.name !== '๐ซ-wapen-aanvraag') {
            message.channel.send(`**${message.member.user.username}** U kunt dit commando niet in deze chat uitvoeren!`);
            return;}
        message.channel.send('*Probeer* **" -av <Soort Aanvraag> <Wat> <Datum> "** ');
    }
    if(cmd == 'av') {
        if(message.channel.name !== '๐ซ-wapen-aanvraag') {
            message.channel.send(`**${message.member.user.username}** U kunt dit commando niet in deze chat uitvoeren!`);
            return;}
        message.channel.send(`Wie: ${message.member.nickname}`)
        message.channel.send(`Soort Aanvraag: ${args[0]}`)
        message.channel.send(`Wat: ${args[1]}`)
        message.channel.send(`Datum: ${args[2]}`)

    }
})
