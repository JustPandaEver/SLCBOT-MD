let handler = async (m, { conn }) => {
let info = `
*${htki} GROUP BOT ${htka}*
`
const sections = [
   {
	title: `𝗝𝗢𝗜𝗡 𝗞𝗘 𝗚𝗥𝗨𝗣 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟 𝗦𝗜𝗟𝗘𝗡𝗖𝗘 𝗕𝗢𝗧*\n\n\n━━━〔 Dᴏɴ'ᴛ ғᴏʀɢᴇᴛ Dᴏɴᴀᴛɪᴏɴ 〕━━━`,
	rows: [
	    {title: '💌 › Group Silence BOT', description: "Group Utama Silence BOT", rowId:".gcbot"},
        //{title: '✉️ › Grup TokoBot', description: "Group Kedua", rowId:".gcbot2"},
        //{title: '📧 › Group Full Bot', description: "Gruop Ketiga", rowId:".gcbot3"},
        {title: '🎐 › Owner', description: "Creator Silence BOT >ω<", rowId:".owner"},
        {title: '🧿 › Info Silence BOT', description: "Info Silence BOT >ω<", rowId:".info"},
        {title: '📮 › Donasi', description: "Donasi Untuk Silence ≧▽≦", rowId:".donasi"},
	    ]
      },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "Klik di sini",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['groupbot']
handler.tags = ['info']
handler.command = /^(groupbot)$/i

export default handler
