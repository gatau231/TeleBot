module.exports = {
  start: async function(ctx, { Telegram, user, message, text, is }) {
    if(!text) text = "echo \"workas\""
    await ctx.reply("⏳| Silahkan tunggu")
    let util = require("util")
    let { exec } = require("child_process")
    exec(text, async function(err, stdout, stderr) {
      //if(err) await ctx.reply(util.format(err) || "**No Result**")
      if(stdout) await ctx.reply(util.format(stdout) || "**No Result**")
      if(stderr) await ctx.reply(util.format(stderr) || "**No Result**")
    })
  },
  owner: true,
  tags: "owner",
  help: ["exec"],
  desc: "Menjalankan kode Bash"
}
