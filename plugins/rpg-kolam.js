let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
let paus =global.db.data.users[m.sender].paus 
let kepiting = global.db.data.users[m.sender].kepiting 
let gurita = global.db.data.users[m.sender].gurita 
let cumi = global.db.data.users[m.sender].cumi 
let buntal = global.db.data.users[m.sender].buntal 
let dory = global.db.data.users[m.sender].dory 
let lumba = global.db.data.users[m.sender].lumba 
let lobster = global.db.data.users[m.sender].lobster 
let hiu = global.db.data.users[m.sender].hiu 
let udang = global.db.data.users[m.sender].udang 
let ikan = global.db.data.users[m.sender].ikan 
let orca = global.db.data.users[m.sender].orca
let name = m.fromMe ? conn.user : conn.contacts[m.sender]

let zer =`
 [  Kolam  *${name.vnmae || name.notify || name.name}*  ]
π¦ = [ ${kepiting} ] Ekor Kepiting*
π¦ = [ ${lobster} ] Ekor Lobster*
π¦ = [ ${udang} ] Ekor Udang*
π¦ = [ ${cumi} ] Ekor Cumi*
π = [ ${gurita} ] Ekor Gurita*
π‘ = [ ${buntal} ] Ekor Buntal*
π  = [ ${dory} ] Ekor Dory*
π = [ ${orca} ] Ekor Orca*
π¬ = [ ${lumba} ] Ekor Lumba* 
π³ = [ ${paus} ] Ekor Paus*
π¦ = [ ${hiu} ] Ekor Hiu*

 *Total*: ${kepiting + lobster + udang + cumi + gurita + buntal + dory + orca + lumba + paus + hiu }
 `.trim()
     conn.reply(m.chat, zer, m)

 listMsg = {
 buttonText: 'Mulai',
 footerText: wm,
 description: `Cafe Id`,
 sections: [
                     {
                      "title": `Cari βΊοΈ`,
 rows: [
                           {
                              "title": "\n\n",
                              "rowId": ""
                           },
                           {
                              "title": "\n\n",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
} 
handler.help = ['kolam']
handler.customPrefix = ['kolam']
handler.command = new RegExp
handler.register = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)