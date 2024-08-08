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
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_37_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYyLFxuICAgICAgICA2OSxcbiAgICAgICAgNjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMzMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MixcbiAgICAgICAgNjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjMsXG4gICAgICAgIDU0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA3LFxuICAgICAgICA4LFxuICAgICAgICA1NixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxODAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIzLFxuICAgICAgICA4NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDMwLFxuICAgICAgICA1MCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDQzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQxLFxuICAgICAgICAzNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDk1LFxuICAgICAgICAyNixcbiAgICAgICAgODYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODEsXG4gICAgICAgIDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc2LFxuICAgICAgICA0NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc3LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMixcbiAgICAgICAgMjAsXG4gICAgICAgIDIxLFxuICAgICAgICA1MyxcbiAgICAgICAgMyxcbiAgICAgICAgMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDkxLFxuICAgICAgICA5NixcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDg2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDczLFxuICAgICAgICAxMixcbiAgICAgICAgMTg2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDY4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDM5LFxuICAgICAgICAzNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImxLRjdBR2g4QzFoa2w4N09Cd1UyZDliMzc0VzJ1bzYvOU0zZm5pbFVxL0k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkpvdUxvLWFzUXMyemp4bEtwdkVtWXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWEzYjY0NjQtMzE3OS00MGNlLWJhZjYtOWE4MDg0ZmNhODc0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOSxcbiAgICAgIDE0OSxcbiAgICAgIDE0NixcbiAgICAgIDE5NCxcbiAgICAgIDEyNCxcbiAgICAgIDEyOCxcbiAgICAgIDU4LFxuICAgICAgMTgwLFxuICAgICAgODcsXG4gICAgICAxMTUsXG4gICAgICA0OSxcbiAgICAgIDE3MSxcbiAgICAgIDY3LFxuICAgICAgMTI3LFxuICAgICAgMTIwLFxuICAgICAgMTQxLFxuICAgICAgNTEsXG4gICAgICAyNDYsXG4gICAgICA3OSxcbiAgICAgIDE0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MCxcbiAgICAgIDg0LFxuICAgICAgMjEwLFxuICAgICAgMjI1LFxuICAgICAgMTA4LFxuICAgICAgMTY2LFxuICAgICAgMjEzLFxuICAgICAgMjcsXG4gICAgICAxNjQsXG4gICAgICAxMjAsXG4gICAgICAyMTgsXG4gICAgICA1OCxcbiAgICAgIDYxLFxuICAgICAgMTExLFxuICAgICAgMjI3LFxuICAgICAgMTIsXG4gICAgICA2NSxcbiAgICAgIDEzNCxcbiAgICAgIDE0MixcbiAgICAgIDE4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBMkhCTEdLWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjU3NTE0NTA0OjYyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0MzkxMTgyOTUyNDUxNDo2MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMU3ZrL1lNRUpINDByVUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkFUY3hJVmVEUDRZMTFIdlU1N2VTS0Q2Y0dCVzJpbHhtZ3A3dzhsL2FIMzA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTmhZTG9YajgvTXRvNUhLb2NZbkFRNGdJZUVGWVJ6d0puWGVjUjlGd01UYWh4emxWdFNIZTAydXVUSDU1ZTlXNGE3SDU4SWJJM2xUM3JlaGNINmxGQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaDhyc3ZWaW1UQmtGWno5VXVLYVR4WW1vaFkrb3F3YkxXV0JGQkJYbk03Tkl0SzAyQ1hGMU5DekdhM2dERWZBNENUeFUyNmpzVmQvQlBpVVA1ODB0RHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzMjU3NTE0NTA0OjYyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMxMjA2NjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDYmFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNiYS5qc29uIjogIntcImtleURhdGFcIjpcInlDWC9mUDlnUDh2Rkwvb09IYStBTE1uOG1qK1E3NXpxRGhrcUxIZkNTR2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzQ2OTAwNjc3MixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzIsMF19LFwidGltZXN0YW1wXCI6XCIxNzIzMDYxMDY4NDg1XCJ9Igp9"  // PUT your SESSION_ID 


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
