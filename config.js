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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_40_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3LFxuICAgICAgICAxODMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTksXG4gICAgICAgIDY4LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDg5LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA2MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOCxcbiAgICAgICAgMjEwLFxuICAgICAgICA0MixcbiAgICAgICAgNDUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDM5LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyOCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDksXG4gICAgICAgIDExMixcbiAgICAgICAgNDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNixcbiAgICAgICAgNzUsXG4gICAgICAgIDE5LFxuICAgICAgICAxOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTgwLFxuICAgICAgICA2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDUyLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgODksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDY5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDMyLFxuICAgICAgICA1NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDg3LFxuICAgICAgICA0NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTksXG4gICAgICAgIDM5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUwLFxuICAgICAgICA4NixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDY2LFxuICAgICAgICAxMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDY0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NixcbiAgICAgICAgODksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMyxcbiAgICAgICAgNjksXG4gICAgICAgIDk1LFxuICAgICAgICA0NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQnN1V2p6Wmppckhib0szWDRtakhDbVVDcjJQOUlENkg1cUlPclh6bHNrYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiajZMZm9zWjFUcjJTdDZCelRXTkN3UVwiLFxuICBcInBob25lSWRcIjogXCI3ZmU3OTUxMi1kM2UzLTQ3NmYtODEyNi1mNTMyMWM2MThhZGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzksXG4gICAgICAxNixcbiAgICAgIDE1NixcbiAgICAgIDQ3LFxuICAgICAgODEsXG4gICAgICAxNDQsXG4gICAgICAxMzksXG4gICAgICAyNTQsXG4gICAgICAxMDEsXG4gICAgICAxMzAsXG4gICAgICAxOTgsXG4gICAgICAxNDIsXG4gICAgICA1MixcbiAgICAgIDE4LFxuICAgICAgMjI0LFxuICAgICAgNjUsXG4gICAgICA4MyxcbiAgICAgIDE5OSxcbiAgICAgIDE4MyxcbiAgICAgIDI0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzEsXG4gICAgICAxMzcsXG4gICAgICA3MyxcbiAgICAgIDM1LFxuICAgICAgMjEsXG4gICAgICAyMjUsXG4gICAgICA1NSxcbiAgICAgIDE3MixcbiAgICAgIDQ2LFxuICAgICAgMTQzLFxuICAgICAgNDIsXG4gICAgICAyMTAsXG4gICAgICAxMDIsXG4gICAgICAxNTIsXG4gICAgICAxOCxcbiAgICAgIDE3NCxcbiAgICAgIDI2LFxuICAgICAgMjUxLFxuICAgICAgMTE2LFxuICAgICAgM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2RVhZVFJLN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjU3NTE0NTA0OjY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0MzkxMTgyOTUyNDUxNDo2NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMU3ZrL1lNRUsyKzFMVUdHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkFUY3hJVmVEUDRZMTFIdlU1N2VTS0Q2Y0dCVzJpbHhtZ3A3dzhsL2FIMzA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibXJoMUpmMWFnV1FYbmtMczY5cHJleUlxaHB5eHAxVW9WTDN6eVh5UVZueHA0US9CcXgyWFNBdm9KV0tNbHh2VHJ4TVNVRVA1VmNrV2M4RWhsajU2Qnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV2d4aS9kOHk1UFBTRloyR2RMdnJnVXRGUGEzN3lTV2ZqV3RVbCt1VTBTa3JRM2JoVjBBbGo4MENyZE9oSWtoTnNzZkt0dFFrMnRMR0JzUkVQbVFRZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzMjU3NTE0NTA0OjY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMxNDYwMzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDYmZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNiZi5qc29uIjogIntcImtleURhdGFcIjpcInJXMGxPTVI5d2xpd05QbTQya1JRU3pCWFc3VlhqalZrcllRYW04T0pDU2c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzQ2OTAwNjc3MixcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzQsMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjMxMjA2MTI5NTFcIn0iCn0="  // PUT your SESSION_ID 


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
