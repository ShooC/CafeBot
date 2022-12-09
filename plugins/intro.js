let handler = async m => {

conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: 1339889,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: `
· · ─────── · Intro Card · ─────── · ·

Nama:
Askot:
Umur:
Alasan masuk gc:

· · ─────── ·𖥸· ─────── · ·
`,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})

}
handler.command = /^(intro)$/i

module.exports = handler
