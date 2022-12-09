let handler = async(m, { conn, usedPrefix, command }) => {
  if (/^self$/i.test(command)) {
    if (settings.self == true) conn.sendButton(m.chat, `sudah ${command} dari tadi kak`, wm, 'Self', usedPrefix + 'self', m)
    if (!settings.self == true) {
      await conn.sendButton(m.chat, `Berhasil set ke ${command}!`, wm, 'ılı.lıl Public lılı.ıllı.', usedPrefix + 'public', m)
      settings.self = true
    }
  }
  if (/^publi(c|k)$/i.test(command)) {
    if (settings.self == false) conn.sendButton(m.chat, `sudah ${command} dari tadi kak`, wm, 'ılı.lıl Self lılı.ıllı.', usedPrefix + 'self', m)
    if (!settings.self == false) {
      await conn.sendButton(m.chat, `Berhasil set ke ${command}!`, wm, 'Self', usedPrefix + 'self', m)
      settings.self = false
    }
  }
}

handler.help = ["self", "public"]
handler.tags = ["owner"]
handler.command = /^(self|publi(c|k))/i

handler.rowner = true 

module.exports = handler
