const Canvas = require("canvas");
const Discord = require("discord.js");

const margin = {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
}

const canvasInfo = {
    width: 1080,
    height: 1080,
}

module.exports.run = async (bot, message, args) => {
    
    const canvas = Canvas.createCanvas(canvasInfo.width, canvasInfo.height);
    const ctx = canvas.getContext("2d");

    ctx.font = "100px Lato Heavy Italic";
    ctx.textAlign = "center";
    ctx.fillText("Hello world!", margin.left, margin.top, canvasInfo.width - margin.left - margin.right);

    const attachment = Discord.MessageAttachment(canvas.toBuffer(), "meme.png");

    message.channel.send(attachment);

}

module.exports.config = {
    name: "new",
    aliases: ["generate", "create", "meme"]
}