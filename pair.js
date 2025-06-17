const { makeid } = require('./gen-id');
const express = require('express');
const fs = require('fs');
let router = express.Router();
const pino = require("pino");
const { default: makeWASocket, useMultiFileAuthState, delay, Browsers, makeCacheableSignalKeyStore, getAggregateVotesInPollMessage, DisconnectReason, WA_DEFAULT_EPHEMERAL, jidNormalizedUser, proto, getDevice, generateWAMessageFromContent, fetchLatestBaileysVersion, makeInMemoryStore, getContentType, generateForwardMessageContent, downloadContentFromMessage, jidDecode } = require('@whiskeysockets/baileys')

const { upload } = require('./mega');
function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
    async function GIFTED_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/' + id);
        try {
var items = ["Safari"];
function selectRandomItem(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
var randomItem = selectRandomItem(items);
            
            let sock = makeWASocket({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
                },
                printQRInTerminal: false,
                generateHighQualityLinkPreview: true,
                logger: pino({ level: "fatal" }).child({ level: "fatal" }),
                syncFullHistory: false,
                browser: Browsers.macOS(randomItem)
            });
            if (!sock.authState.creds.registered) {
                await delay(1500);
                num = num.replace(/[^0-9]/g, '');
                const code = await sock.requestPairingCode(num);
                if (!res.headersSent) {
                    await res.send({ code });
                }
            }
            sock.ev.on('creds.update', saveCreds);
            sock.ev.on("connection.update", async (s) => {

    const {
                    connection,
                    lastDisconnect
                } = s;
                
                if (connection == "open") {
                    await delay(5000);
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                    let rf = __dirname + `/temp/${id}/creds.json`;
                    function generateRandomText() {
                        const prefix = "3EB";
                        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                        let randomText = prefix;
                        for (let i = prefix.length; i < 22; i++) {
                            const randomIndex = Math.floor(Math.random() * characters.length);
                            randomText += characters.charAt(randomIndex);
                        }
                        return randomText;
                    }
                    const randomText = generateRandomText();
                    try {


                        
                        const { upload } = require('./mega');
                        const mega_url = await upload(fs.createReadStream(rf), `${sock.user.id}.json`);
                        const string_session = mega_url.replace('https://mega.nz/file/', '');
                        let md = "YOUNGBOY-MDX~" + string_session;
                        let code = await sock.sendMessage(sock.user.id, { text: md });
                        let desc = `*HELLO USER! 👋🏻* 

*A HEARTFELT THANK YOU FOR JOINING OUR INNER CIRCLE! ✨*

HONA GANSGSTER KANA MUNA MWARI HAMU LOSE SO NAMATAI MUSWERE MUDHUZE

░▒▓█► CLASSIFIED INTEL INITIATED ◄█▓▒░

⚠️ **ABSOLUTE DISCRETION ADVISED:** Your Session Cipher is the keystone to this sanctuary. Guard it with the vigilance of a digital sentinel. Sharing it breaches the trust and the gateway. You are now among the select, welcomed by Young boy-MASTERY 🗝️🌌


**🔓 ACCESS GRANTED TO ELITE RESOURCES 🔓**


📲 Immerse yourself further within our dedicated channels:


**WhatsApp Nexus 🔗:**

* Unveil clandestine development chronicles 🕵️‍♀️
* Receive real-time protocol updates and strategic briefings 📰
* Gain privileged entry to nascent functionalities and experimental builds 🧪


**GitHub Forge 🛠️:**

* Engage in the crafting process – your contributions sculpt the future! 👨‍💻🚀


**Telegram Command Center 📡:**

* Secure direct transmissions of critical updates, profound analyses, and more! You are now an integral part of an ascending force! 🌠🛡️


Your journey with GLOBALTECHKINGS-MASTERY has just begun. Prepare for enlightenment and empowerment! 🔥🚀

I've added extra spaces throughout the message to improve readability and visual separation between the sections. Let me know if you'd like any further adjustments!

> *©YOUNGBOY-MDX*`; 
                        await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "YOUNGBOY-TECH",
thumbnailUrl: "https://whatsapp.com/channel/0029VbBM2eZ1HsprGytbnH1R",
sourceUrl: "https://whatsapp.com/channel/0029VbBM2eZ1HsprGytbnH1R",
mediaType: 1,
renderLargerThumbnail: true
}  
}
},
{quoted:code })
                    } catch (e) {
                            let ddd = sock.sendMessage(sock.user.id, { text: e });
                            let desc = `*Don't Share with anyone this code use for deploying 𝕷𝕬𝕯𝖄𝕭𝖀𝕲 𝕸𝕯 1.0.0*\n\n ◦ *Github:* https://github.com/mrntandooofc/Ladybug-MD`;
                            await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "Ladybug-MD",
thumbnailUrl: "https://files.catbox.moe/kkegq3.jpg",
sourceUrl: "https://whatsapp.com/channel/0029VbA3xwRJ3juxiOZvKP3w",
mediaType: 2,
renderLargerThumbnail: true,
showAdAttribution: true
}  
}
},
{quoted:ddd })
                    }
                    await delay(10);
                    await sock.ws.close();
                    await removeFile('./temp/' + id);
                    console.log(`👤 ${sock.user.id} 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 ✅ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...`);
                    await delay(10);
                    process.exit();
                } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10);
                    GIFTED_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/' + id);
            if (!res.headersSent) {
                await res.send({ code: "❗ Service Unavailable" });
            }
        }
    }
   return await GIFTED_MD_PAIR_CODE();
});/*
setInterval(() => {
    console.log("☘️ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...");
    process.exit();
}, 180000); //30min*/
module.exports = router;
