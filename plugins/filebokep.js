let handler  = async (m, { conn }) => {
	
	await m.reply('[❗] Tunggu Sebentar:v.')
  conn.reply(m.chat,`${pickRandom(global.boep)}`, m)
}
handler.help = ['filebokep2']
handler.tags = ['nsfw']
handler.command = /^(filebokep2)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

export default handler 

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.boep = [
'Tapi boong , wkwkw stay halal..',
]
