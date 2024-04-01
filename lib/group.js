const fs = require('fs')
const moment = require('moment-timezone')

exports.groupResponse_Remove = async (mts, update) => {
const welcome = JSON.parse(fs.readFileSync('./database/welcome.json'));
const isWelcome = mts.isGroup ? welcome.includes(mts.chat) : false
if (isWelcome) return mts.sendMessage(update.id, {text: `ask`})
const metadata = await mts.groupMetadata(update.id)
for (let participant of update.participants) {
try{
let metadata = await mts.groupMetadata(update.id)
let participants = update.participants
let mtsName = metadata.subject
const mtstime = moment.tz('asia/jakarta').format('HH:mm')
const mtsdate = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const mtsmembers = metadata.participants.length
for (let num of participants) {
if (update.action == 'remove'){
await mts.sendMessage(update.id, {text: `*Goodbye Kak👋 @${num.split('@')[0]}*

━═━═━═━═━═━═━═━═━═━═━
❒ *Leave To ${metadata.subject}*
❒ *Member Ke:* _${mtsmembers}_
❒ *Waktu:* _${mtsdate} ${mtstime}_
━═━═━═━═━═━═━═━═━═━═━`,
footer: metadata.subject, 
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}
}
  
exports.groupResponse_Welcome = async (mts, update) => {
const welcome = JSON.parse(fs.readFileSync('./database/welcome.json'));
const isWelcome = mts.isGroup ? welcome.includes(mts.chat) : false
if (isWelcome) return mts.sendMessage(update.id, {text: `ask`})
const metadata = await mts.groupMetadata(update.id)
for (let participant of update.participants) {
try{
let metadata = await mts.groupMetadata(update.id)
let participants = update.participants
let mtsName = metadata.subject
const mtstime = moment.tz('asia/jakarta').format('HH:mm')
const mtsdate = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const mtsmembers = metadata.participants.length
for (let num of participants) {
if (update.action == 'add') {
await mts.sendMessage(update.id, {text: `*Welcome Kak👋 @${num.split('@')[0]}*

━═━═━═━═━═━═━═━═━═━═━
❒ *Welcome To ${metadata.subject}*
❒ *Member Ke:* _${mtsmembers}_
❒ *Waktu:* _${mtsdate} ${mtstime}_
━═━═━═[ *DESKRIPSI* ]═━═━═━
${metadata.desc}`,
footer: metadata.subject, 
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}
}
  
exports.groupResponse_Promote = async (mts, update) => {
const welcome = JSON.parse(fs.readFileSync('./database/welcome.json'));
const isWelcome = mts.isGroup ? welcome.includes(mts.chat) : false 
if (isWelcome) return mts.sendMessage(update.id, {text: `ask`})
const metadata = await mts.groupMetadata(update.id)
for (let participant of update.participants) {
try{
let metadata = await mts.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'promote') {
await mts.sendMessage(
update.id, 
{ 
text: `*@${num.split("@")[0]} Naik jabatan jadi admin grup*`,
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}
}
  
exports.groupResponse_Demote = async (mts, update) => {
const welcome = JSON.parse(fs.readFileSync('./database/welcome.json'));
const isWelcome = mts.isGroup ? welcome.includes(mts.chat) : false
if (isWelcome) return mts.sendMessage(update.id, {text: `ask`})
const metadata = await mts.groupMetadata(update.id)
for (let participant of update.participants) {
try{
let metadata = await mts.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'demote') {
await mts.sendMessage(
update.id, 
{ 
text: `*@${num.split("@")[0]} Turun jabatan menjadi member biasa*`,
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}
}