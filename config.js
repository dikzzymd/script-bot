//===================[ OWNER ]=====================\\

global.botname = ["ᴍɪᴇ-ᴀɪ ᴍᴅ"]
global.botnumber = ["6285780087381"]
global.websitex = ['https://dikzz.vercel.app/']
global.qris = "https://files.catbox.moe/0adc22.jpg"
global.packname = 'ᴍᴀᴅᴇ ʙʏ'
global.author = 'ᴍɪᴇ-ᴀɪ ᴍᴅ'

global.owner = [
  "6285780087381",
]
//===================[ GROUP AND SALURAN ]=====================\\
global.linknya = 'https://whatsapp.com/channel/0029VajFLTL0rGiG3q1ina3H'
global.idsaluran2 = ['120363315722294633@newsletter']
//===================[ FUNCTION LAIN NYA ]=====================\\
global.fotonya2 = "https://files.catbox.moe/2rej99.jpg"
global.wlcm = []
global.wlcmm = []
global.limitawal = {
    premium: "Infinity",
    free: 20
}

//===================[ MESS ]=====================\\
global.mess = {
    success: '𝙳𝚘𝚗𝚎 𝙺𝚊𝚔 ',
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    OnlyOwner: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
    OnlyGrup: '_*❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
    private: '_(❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
    wait: '_*Wait Tunggu Sebentar*_',
    notregist: '_*Kamu Belum Terdaftar Di Database Bot Silahkan Daftar Terlebih Dahulu_*',
    premium: '_*khusus Premium" Mau Prem? Chat Owne_*',
    endLimit: '_*Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB_*.',
}


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})