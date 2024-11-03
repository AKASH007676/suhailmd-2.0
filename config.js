const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Kolkata,India."


global.mongodb= process.env.MONGODB_URI || "true" || "mongodb+srv://akash:akash@cluster0.ilcd2ez.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "https://www.instagram.com/akash__biswas__01?igsh=MWVyMmJpazA2anVlbQ==";
global.website=process.env.GURL || "https://www.instagram.com/akash__biswas__01?igsh=MWVyMmJpazA2anVlbQ==" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ebaf2cddaa62349653878.jpg" || "https://telegra.ph/file/ebaf2cddaa62349653878.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© `𝖋𝖎𝖑𝖊 𝖌𝖊𝖓𝖊𝖗𝖆𝖙𝖊𝖉 𝖇𝖞 𝖆 𝖐 𝖆 𝖘 𝖍`" 


global.devs = "917872324809" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "917872324809";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917872324809";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/ebaf2cddaa62349653878.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "91xxxxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_41_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQyLFxuICAgICAgICAxODEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAzNixcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwLFxuICAgICAgICA5MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzksXG4gICAgICAgIDkwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NixcbiAgICAgICAgOTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTMxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgODksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA1LFxuICAgICAgICA0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDk4LFxuICAgICAgICAyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDUxLFxuICAgICAgICA1MixcbiAgICAgICAgMTE5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE1LFxuICAgICAgICA2NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAzNSxcbiAgICAgICAgODAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTYsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3LFxuICAgICAgICA2MCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjksXG4gICAgICAgIDI2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDM4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyLFxuICAgICAgICAyMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODMsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA1NixcbiAgICAgICAgODEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICAyMyxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDYxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDcwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDksXG4gICAgICAgIDU4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTksXG4gICAgICAgIDk3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMXNtL3FiRi9qbUFzT01VV2JMRHVnUGZ2MnZza2tpNStKa0dzS2dPNGY3MD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTc4NzIzMjQ4MDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU2RDVDQzY0OTkzMTg5QTNGRjM4Q0FFNTFGMzZCRjhEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDYzMDQ4MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNzg3MjMyNDgwOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiREZBRTk2Nzc4NTUxMjJCMzA3QTQ2MEY5QjIwQUU2MjVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwNjMwNDgxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjJaQlBGeUdBU2FxNGhDWjZacGVaTmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTZlNzliNDAtM2QzMy00YWQ1LWI3MmQtMjQzOGFmNmUyNmZkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk0LFxuICAgICAgMjAsXG4gICAgICAxNCxcbiAgICAgIDE3NSxcbiAgICAgIDYwLFxuICAgICAgOTQsXG4gICAgICAxNjksXG4gICAgICAxMTIsXG4gICAgICAyMSxcbiAgICAgIDcwLFxuICAgICAgMjU0LFxuICAgICAgMjAsXG4gICAgICAxMyxcbiAgICAgIDIyNixcbiAgICAgIDE2LFxuICAgICAgMTgwLFxuICAgICAgMjM0LFxuICAgICAgODgsXG4gICAgICAxMyxcbiAgICAgIDUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOSxcbiAgICAgIDEsXG4gICAgICAzNSxcbiAgICAgIDg0LFxuICAgICAgMTQxLFxuICAgICAgMTI1LFxuICAgICAgNTgsXG4gICAgICAyMDMsXG4gICAgICAxODAsXG4gICAgICAxMTYsXG4gICAgICA1MCxcbiAgICAgIDE0MixcbiAgICAgIDg5LFxuICAgICAgMjQ1LFxuICAgICAgMTA2LFxuICAgICAgOCxcbiAgICAgIDE2MyxcbiAgICAgIDE2NixcbiAgICAgIDE0MSxcbiAgICAgIDEzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2OFJLUkRDOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE3ODcyMzI0ODA5OjUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzkxOTU4MDUyMzcyNTY6NTFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiV0hQT09UWVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09YTzhvY0dFTXltbmJrR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMTBaSkdjYXhMSytFZjdnVERhUVRCT1dtN0IrT2MyOVBFOElvbWRPVC94az1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuTUFjZldUTVBWYTVNVFBzK1hBaldOUGR4enh1OUpvVWVyaWdtNjBJanRzSnpSM1prT1ZhamxUZDg5Wi9aR25YNnZxMmFUVE9wcUhBd2QvVFB1R1RDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJkdTZMemVPNUtLYm5rcUNJUjFsSlhVUm1TQ0ZrdGFpUnZvTTlya2pNc2hOd0oxYktFcVBmRzdTa2U2bUxkb3dqWGVqUENyeHFKU3ViMmZzeGVnMDNDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTc4NzIzMjQ4MDk6NTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNjMwNDc5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTFl3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMWXcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJDTXphL3JGY1pnaW5YVTFINldieFVrTUJJdHRHZkkyQ0NFSnRub1lZSmtjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MjcxNzA2NjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
