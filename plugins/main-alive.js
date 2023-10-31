let handler = async (m, { conn, text, usedPrefix, command }) => {
  //To get sender's name
   let name = m.pushName || conn.getName(m.sender);
  
  // Define the content
  let mainImg = "https://telegra.ph/file/7d7e3169e7b59e6f9983f.jpg"; // Main image URL
  let smallImg = "https://telegra.ph/file/7d7e3169e7b59e6f9983f.jpg"; // Small image URL
  let smallText = "I'M Alive Now"; // Small text
  let mainText = "𝙻𝙴𝙶𝙴𝙽𝙳-𝙿𝚄𝚂𝚄"; // Main text
  let audioUrl = "https://raw.githubusercontent.com/legendadi07/WhatsApp-Userbot/main/src/mp3/Abhi.mp3"; // Audio URL
  // Construct the message
  let con = {
    key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) },
    message: {
      contactMessage: {
        displayName: `${name}`, // Replace with the desired display name
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    }
  };

  let doc = {
    audio: {
      url: audioUrl
    },
    mimetype: 'audio/mp4',
    ptt: true,
    waveform: [100, 0, 100, 0, 100, 0, 100],
    fileName: "LEGEND-PUSU",
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: smallText,
        body: mainText,
        thumbnailUrl: smallImg, // Small image
        sourceUrl: 'https://telegra.ph/file/6adb9e9912e1fb27b41ec.mp4',
        mediaType: 1,
        renderLargerThumbnail: false,
        mediaUrl: mainImg // Main image
      }
    }
  };

  // Send the message
  await conn.sendMessage(m.chat, doc, { quoted: con });
}

handler.help = ['alive']
handler.tags = ['main']
handler.command = /^(alive)$/i

export default handler;
