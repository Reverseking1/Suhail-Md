const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233257514504";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "233xxxxxxxxx,234xxxxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_48_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA1LFxuICAgICAgICA0MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDc5LFxuICAgICAgICA2MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjksXG4gICAgICAgIDYxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTksXG4gICAgICAgIDc4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDYsXG4gICAgICAgIDI4LFxuICAgICAgICA4NixcbiAgICAgICAgMjQzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjI5LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU5LFxuICAgICAgICA0MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDMxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDkzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDczLFxuICAgICAgICAyMzksXG4gICAgICAgIDQxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxLFxuICAgICAgICA0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQzLFxuICAgICAgICA4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDc0LFxuICAgICAgICA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDczLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDMxLFxuICAgICAgICAyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDksXG4gICAgICAgIDg0LFxuICAgICAgICA0NCxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA4NyxcbiAgICAgICAgNDksXG4gICAgICAgIDIwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAzOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAzMixcbiAgICAgICAgMTEzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTcwLFxuICAgICAgICA5NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm9FcWlwZkRjZzlKRkVWU2Z0aHVWaEVxdjlYT25vK0cwTERxcnEvb1BiT2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjIyVGd5TFdhUTFDY3ZkY2pqa3dmRndcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjY3OGM0NjItZDdlMS00MWRjLTg2Y2QtNDEzOWEzNjg3OGMzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNyxcbiAgICAgIDYsXG4gICAgICAxOTUsXG4gICAgICAxNTAsXG4gICAgICAyMTUsXG4gICAgICA1OSxcbiAgICAgIDE1NCxcbiAgICAgIDgsXG4gICAgICAyMTksXG4gICAgICAxMzEsXG4gICAgICAyMzksXG4gICAgICAxMzQsXG4gICAgICA5NSxcbiAgICAgIDUxLFxuICAgICAgNDAsXG4gICAgICA5NSxcbiAgICAgIDIxNCxcbiAgICAgIDU5LFxuICAgICAgMTUxLFxuICAgICAgNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM5LFxuICAgICAgMjUxLFxuICAgICAgMzMsXG4gICAgICAxNzEsXG4gICAgICAyNyxcbiAgICAgIDIxOCxcbiAgICAgIDE1OSxcbiAgICAgIDE5MixcbiAgICAgIDgyLFxuICAgICAgMTUxLFxuICAgICAgMTAzLFxuICAgICAgMTIwLFxuICAgICAgODcsXG4gICAgICAzNyxcbiAgICAgIDk1LFxuICAgICAgMTcxLFxuICAgICAgMjE1LFxuICAgICAgNzcsXG4gICAgICAxNjIsXG4gICAgICAyMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRzZRTUhQRjZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzI1NzUxNDUwNDo1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDM5MTE4Mjk1MjQ1MTQ6NTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFN2ay9ZTUVOV0N6N1VHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBVGN4SVZlRFA0WTExSHZVNTdlU0tENmNHQlcyaWx4bWdwN3c4bC9hSDMwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInhac0JlRGR5dWlDV21CMk1kMG0wRnZueFdQZjZXSjNmYUdhZlJDSXpjdGZGV2xaWkNXSU11VU54ZWhjd0oyTUc5clNhcWhzTGxwQW1YenpKUVg5NEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjJqSzBoR1BqSXZGWVhlTXRCOElmQm94NFJrODE0SkZxYUVBR21hdEI4SUt4MHQ5dGwrUGZ4MHlBYlNLY0NjblI4b3hFUGN4UHN6VXI4WkdFNGYwV0N3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzI1NzUxNDUwNDo1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzMDU2NDcyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ2JYXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDYlguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNdjh3VnoyM2xWNkhWL1dpWFNNWnZrdDJsa1d4aXlJSFNkeGdhYk5KTytjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM0NjkwMDY3NzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMzA0OTE0ODE4MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Reverse King ❤️💰",
  ownername:process.env.OWNER_NAME|| "Reverse King ❤️💰",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
