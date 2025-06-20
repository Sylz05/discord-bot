const { Client, EmbedBuilder, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
require('dotenv').config()

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
})

client.login(process.env.TOKEN)
console.log('bot discord running')

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    const executor = message.member;

    if (!executor.permissions.has('Administrator')) {
        return message.reply('คุณไม่สามารถใช้งานคำสัง่นี้ได้')
    }

    if (message.content.includes('/embed')) {

        const Embed = new EmbedBuilder()
            .setColor('00f8ff')
            .setTitle('Text')
            .setDescription('text')
            .setImage('https://blog.tryshiftcdn.com/uploads/2020/04/multiple-discord-accounts@2x_1160x600_acf_cropped.jpg')
            .setFields()

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('role_Id')
                .setLabel('Verify')
                .setStyle(ButtonStyle.Danger)
        )
        message.delete()
        return message.channel.send({ embeds: [Embed], components: [row] })
    }
})

client.on('interactionCreate', async i => {
    if (!i.isButton()) return;
    const roleId = process.env.ROLE_ID
    const channelID = process.env.LOG_VERIFY
    const channel = client.channels.cache.get(channelID)


    if (i.customId === 'role_Id') {
        const member = i.member
        try {
            await i.deferReply({ flags: 64 })
            await setTimeout(async () => {
                try {
                    await member.roles.add(roleId)
                    await i.editReply({ content: 'ยืนยันตัวตนสำเร็จ', flags: 64 })
                } catch {
                    await i.editReply({ content: 'ยืนยันตัวตนไม่สำเร็จ โปรดลองอีกครั้ง', flags: 64 })
                }
                 await channel.send(`คุณ <@${i.user.id}> รับยศ <@&${roleId}>`)
            }, 3000)
        } catch (e) {
            i.reply('เกิดข้อผิดพลาดจากระบบ')
        }
    }
})