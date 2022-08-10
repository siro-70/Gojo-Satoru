═══════════════════════════════════════════════════════//
//
//                              Eren-Bot
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['79586848937']
global.premium = ['84921228172']
global.ownernomer = '79811889093'
global.ownername = 'Eren-Las-Bot'
global.botname = 'Eren-Bot'
global.footer = '©Eren Bot.'
global.ig = 'https://wa.me/+79586848937'
global.region = 'India, South India, Kerala'
global.sc = 'https://youtube.com/channel/UCeGgOY9B-5fYrYD5ELPgMkQ'
global.myweb = 'https://i.ibb.co/DfHdXWz/IMG-20220729-WA0029.jpg'
global.packname = 'Eren-Las'
global.author = '🐦Star Boy Nexus'
global.sessionName = 'session'
global.prefa = ['','!','.','😙','💎','😩']
global.sp = '⭔'
global.mess = {
    success: 'تم ✓',
    admin: 'هذه الميزة للمشرف فقط!',
    botAdmin: 'يجب أن يكون البوت مسؤولاً أولاً! ',
    owner: 'هذة الميزة لمالك البوت فقط! ',
    group: 'هذة الميزة للمجموعات فقط! ',
    private: 'هذة الميزة تستخدم في الخاص فقط! ',
    bot:'هذة الميزة مخصصة للبوت فقط! ',
    wait: 'انتظر لحظة ...',
    error: 'خطأ! ربما انتهت صلاحية مفتاح Api🤔!',
    endLimit: 'انتهت صلاحية الحد اليومي الخاص بك ، وسيتم إعادة تعيين الحد كل 12 ساعة',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
