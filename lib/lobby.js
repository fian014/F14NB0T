exports.lobby = (id, Fian014, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) => {
	return `
	
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋
❉──────────❉

╔════════════════════
║   *MENU utama bot ${Fian014}*
╠════════════════════
║╭──❉ *SERING DI PAKAI* ❉──
║│1. *#sticker*
║╰───────────
╠════════════════════
║╭──❉  *daftar memu*  ❉────
║│1. *#media* 
║│2. *#edukasi*
║│3. *#informasi*
║│4. *#other*
║│5. *#changelog*
║│6. *#ownerinfo*
║╰────────────
╠════════════════════
║  *BOT BY Fian014*
╚════════════════════

╔[ *TANGGAL HARI INI🗓️* ]
╚➣ _*${tampilTanggal}*_
╔[ *SEKARANG JAM🕒* ]
╚➣ _*${tampilWaktu}*_
╔[ *BOT AKTIF🤖* ]
╚➣ _*${aktif}*_
`
}