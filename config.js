//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wallyjay123@gmail.com";
global.location = "Osun, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Wallyjaytechh";
global.gurl = process.env.GURL || "https://wa.me/2348144317152";
global.website = process.env.GURL || "https://wa.me/2348144317152";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TLG3Mb4/photo-2024-11-01-16-00-22.jpg";
global.devs = "https://t.me/svenanjafrieda";
global.sudo = process.env.SUDO || "2348144317152,2348155763709,2348054984935";
global.owner = process.env.OWNER_NUMBER || "2348144317152";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.scan = "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0FES2VXWjhGL0NsWEtaZWR4UDIxQVN0OU40bHl1bjdnRWZPa3E5ckxFST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieTl1aXFGblFXY3JFNG80UFBhZmpQMWFOa1lQQTBmYXRReWpaWmtWSU1BRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRTc0aE5YUjRudnZkVDExdDRlMmZZc0N4azVDOCtEU2FPQVJWSVFteWs4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpMStuY2NPY29xbi9RdlUwYTJUWUR4dUFUV25pb0RCTi9UWWRQdWtNZERBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitOQm5IZlFLbWpwYVBHTitIT0NHbDhHVGU2VTFzUDNPbVhpbW5ZZUpLRUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhRNmZSZW9pSzRDWjVnRjc4aklKVjU1dVZsUndERTJyaEE4VHJtQ3cxaFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUhTdUZieDQ4RDRsWnoreWlDYzJpVFQvYVF5alRnZFExcmxBUVpCZlIwWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiejJrZGovRlJtQlEwbUFLQ25oZ1ltZkpjd2RmNkxaVkdzQVE0S0lKRnEyST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5JR0p2VnA4OTB6ZzZhUEZVaFZhQnVBL1QyQytqUmlFQldFRDFSYkI3UmxEbnFXbVh6U29iNVRKOWRzQlRFRDhvbUp2aTJlT1RyT0hoM2h4eEhlNGl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg5LCJhZHZTZWNyZXRLZXkiOiJKREYxQ1d2Ukoxckx2YmZ0dXA4dU5jUWRXUVhKcDYzSHp6Q2hBSzhDeWJvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJZY1pJcjZZb1RlR2o2ZzlkWkNab2FnIiwicGhvbmVJZCI6ImZiYTYxMThjLWZiYzUtNGVlYS04NzZlLTUxZGM5NzRmNTJlZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNM3dZL2w2cytJVHdmdDAzU3ovWDJFNlVmbWM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHNyZDRHeTl3RjNZMnVkajZuWHNYeWpDbThzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkQ5TEtZTVc5IiwibWUiOnsiaWQiOiIyMzQ4MTQ0MzE3MTUyOjgyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQN2szNmdGRU02WWs3a0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJRMG1sWGVqUEhmVmQ1MVhlektwS3ZVYkxLKzJ6ZWRrY2daSDgxOWJwSGc0PSIsImFjY291bnRTaWduYXR1cmUiOiJxVFFaOE5jakhpWnFBd0pmKzF1dFNoRytmVktxTzNJaWNSaTJNeDZtV2NvaW9IaFEzcEI3S3NQcThDTHIwN2djNDlkaEV6RVJGSmFNb00zTS85RUlEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicVRFY2Vrb0g0SWpsZDNlRVI1Qkl1ZVB1ZFNHbFB2VGNNOW1HTW41N2lvWmt2VVdob1dFRlQ3VTkvRXprRVIySVdHYzNUN2RHdlVwQWRNc0VaTEk5akE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTQ0MzE3MTUyOjgyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVOSnBWM296eDMxWGVkVjNzeXFTcjFHeXl2dHMzblpISUdSL05mVzZSNE8ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzA0NjQ4NTksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSlF3In0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "INVENTED BY WALLY JAY TECH",
  author: process.env.PACK_AUTHER || "WALLY JAY TECH",
  packname: process.env.PACK_NAME || "WALLYJAYTECH-MD",
  botname: process.env.BOT_NAME || "WALLYJAYTECH-MD",
  ownername: process.env.OWNER_NAME || "WALLY JAY TECH",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "dyrbNSNtMf1CE84he61DR7Wx",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "sk_417da0fdc337b7294d1c4dbe8f955eec681fa8fd7cb284b4",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WALLY JAY TECH").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
