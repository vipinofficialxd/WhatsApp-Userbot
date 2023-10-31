
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONATION*
Share LEGEND-PUSU Bot Link And Support. Git Link https://github.com/legendadi07/WhatsApp-Userbot`
let img = 'https://telegra.ph/file/7d7e3169e7b59e6f9983f.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
