require("./config")
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const { exec } = require("child_process")
const chalk = require('chalk')
const moment = require('moment-timezone');
const didyoumean = require('didyoumean');
const similarity = require('similarity')

module.exports = async (dikz, m) => {
try {
const from = m.key.remoteJid
const body = (
(m.mtype === 'conversation' && m.message.conversation) ||
(m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
(m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
(m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
(m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
(m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
(m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
) ? (
(m.mtype === 'conversation' && m.message.conversation) ||
(m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
(m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
(m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
(m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
(m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
(m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
) : '';

//==================[ TEMPAT CONST LIB ]=====================\\
const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom } = require('./lib/myfunc')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const { isSetProses, addSetProses, removeSetProses, changeSetProses, getTextSetProses } = require('./lib/setproses');
const { isSetDone, addSetDone, removeSetDone, changeSetDone, getTextSetDone } = require('./lib/setdone');

//===================[ TAMPAT PREFIX / ADMIN / OWNER ]====================\\
const budy = (typeof m.text === 'string') ? m.text : '';
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (dikz.user.id.split(':')[0]+'@s.whatsapp.net' || dikz.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await dikz.decodeJid(dikz.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)


const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const groupMetadata = m.isGroup ? await dikz.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
//=================[ TEMPAT FUNCTION DATABASE ]====================\\
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
let listStore = JSON.parse(fs.readFileSync('./database/list-message.json'));
let set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json'));
let set_done = JSON.parse(fs.readFileSync('./database/set_done.json'));


//===================[ TAMPILAN CONSOLE ]=====================\\
if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}

//==================[ FUNCTION FITUR ]=====================\\
try {
ppuser = await dikz.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.log(err)
} 

// respon list 
if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
dikz.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
dikz.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}

const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
    const fkethmb = await reSize(ppuser, 300, 300)
    // function resize
    let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

//self public
if (!global.public) {
if (!m.key.fromMe && !isCreator) return
}

//===================[ FUNCTION REPLY ]==================\\


const reply = (teks) => { 
dikz.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "DikzzyXDN", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@fallzx-features", 
"sourceUrl": "https://youtube.com/@fallzx-features" }}}, { quoted: m }) }

const reply2 = (teks) => {
dikz.sendMessage(from, { text : teks }, { quoted : m })
}

//==================[ FUNCTION WAKTU ]==================\\
function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}

let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
const hariini = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " jam " + minutes + " menit " + seconds + " detik"
}

function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
		// +minutes+":"+sec;
  }

// Sayying time
const timee = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(timee < "23:59:00"){
var waktuucapan = 'Selamat Malam 🌃'
}
if(timee < "19:00:00"){
var waktuucapan = 'Selamat Petang 🌆'
}
if(timee < "18:00:00"){
var waktuucapan = 'Selamat Sore 🌅'
}
if(timee < "15:00:00"){
var waktuucapan = 'Selamat Siang 🏙'
}
if(timee < "10:00:00"){
var waktuucapan = 'Selamat Pagi 🌄'
}
if(timee < "05:00:00"){
var waktuucapan = 'Selamat Subuh 🌉'
}
if(timee < "03:00:00"){
var waktuucapan = 'Tengah Malam 🌌'
}



//==================[ FUNCTION RESPON SALAH ]======================\\
if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('case.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('Terjadi kesalahan:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `Maaf, command yang kamu berikan salah. mungkin ini yang kamu maksud:\n\n•> ${prefix+mean}\n•> Kemiripan: ${similarityPercentage}%`
m.reply(response)
}}

//=================[ TEMPAT CASE DI BAWAH INI ]=================\\
switch(command) {


case 'menu':{
dikz.sendMessage(from, {react: {text: "🎉", key: m.key}})
let anu = `
ʜᴀʟᴏ ᴋᴀᴋ 👏

sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ \`ᴍɪᴇ-ᴀɪ ᴍᴅ\`. ʏᴀɴɢ ᴅɪʀᴀɴᴄᴀɴɢ ᴏʟᴇʜ \`ᴅɪᴋᴢᴢʏ ᴅᴇᴠ\`, sᴀʏᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ʀᴀᴍᴀʜ ᴅᴀɴ ʟᴜᴄᴜ.

✧┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
> [ *⎙ INFO BOT* ]
> ɴᴀᴍᴀ   : ᴍɪᴇ-ᴀɪ ᴍᴅ
> ᴏᴡɴᴇʀ  : ᴅɪᴋᴢᴢʏ
> ᴠᴇʀꜱɪ   :  ${versinya}
✧┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧

┏─ *MENU RANDOM*
┃ add fitur nya lek
┗
┏─ *MENU OWNER*
┃• self
┃• public
┗`
reply2(anu)
 }
break;


//===================[ TEMPAT CASE MENU ]=====================\\



//===================[ TEMPAT CASE MENU AI ]=====================\\
case 'luminai': {
	dikz.sendMessage(from, {
		react: {
			text: "🧐",
			key: m.key
		}
	})
	if (!text) return m.reply(`Contoh: ${prefix+command} hai luminai`);
	const requestData = {
		content: text,
		user: m.sender
	};
	const quoted = m && (m.quoted || m);
	try {
		let response;
		if (quoted && /image/.test(quoted.mimetype || quoted.msg.mimetype)) {
			requestData.imageBuffer = await quoted.download();
		}
		response = (await axios.post('https://lumin-ai.xyz', requestData)).data.result;
		m.reply(response);
	} catch (err) {
		m.reply(err);
	}
}
break

//===================[ TEMPAT CASE MENU OWNER ]=====================\\
case 'self': {
if (!isCreator) return tolakk(mess.OnlyOwner)
global.public = false
m.reply('Sukses Change To Self Mode')
}
break

case 'public': {
if (!isCreator) return tolakk(mess.OnlyOwner)
global.public = true
m.reply('Sukses Change To Public Mode')
}
break


//===================[ TEMPAT CASE MENU GROUP ]=====================\\


//===================[ TEMPAT CASE MENU GAME ]=====================\\


//===================[ BATAS CASE ]=====================\\
default:


if ((budy) && ["proses", "Proses",].includes(budy) && !isCmd) {
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!m.quoted) return reply('Reply pesanan yang akan proses')
let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
let proses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM : @jam\n✨ STATUS : Pending\`\`\`\n\n📝 Catatan :\n@pesanan\n\nPesanan @user sedang di proses!`
const getTextP = getTextSetProses(m.chat, set_proses);
if (getTextP !== undefined) {
var anunya = (getTextP.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', timee).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0]))
dikz.sendTextWithMentions(m.chat, anunya, m)
} else {
dikz.sendTextWithMentions(m.chat, (proses.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', timee).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0])), m)}
}

if ((budy) && ['done', "Done"].includes(budy) && !isCmd) {
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!m.quoted) return reply('Reply pesanan yang telah di proses')
let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
let sukses = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM : @jam\n✨ STATUS : Berhasil\`\`\`\n\nTerimakasih @user Next Order ya🙏`
const getTextD = getTextSetDone(m.chat, set_done);
if (getTextD !== undefined) {
var anunya = (getTextD.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', timee).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0]))
dikz.sendTextWithMentions(m.chat, anunya, m)
} else {
dikz.sendTextWithMentions(m.chat, (sukses.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', timee).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0])), m)}
}


if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}

} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
