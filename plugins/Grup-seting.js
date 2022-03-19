let { GroupSettingChange } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, command }) => {
	let isClose = {
		'open': false,
		'buka': false,
		'on': false,
		'1': false,
		'close': true,
		'tutup': true,
		'off': true,
		'0': true,
	}[(args[0] || '')]
	if (isClose === undefined) {
		await conn.send2Button(m.chat, `
Use:
${usedPrefix + command} <buka/tutup>

Example :
${usedPrefix + command} m7lol
${usedPrefix + command} msdod
	`.trim(), 'ɴᴀɴᴅʜᴜᴛᴛʏ ᴠ3', 'Open', ',grup 1', 'Close', ',grup 0', m)
		throw 0
	}
	await conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, isClose)
}
handler.help = ['group <msdod/m7lol>']
handler.tags = ['group']
handler.command = /^(gro?up)$/i

handler.admin = true
handler.botAdmin = true

module.exports = handler
