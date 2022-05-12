const { Telegraf } = require("telegraf");

const bot = new Telegraf("5345616715:AAEyVGdMAOD59GCemHkKulnhvGE0oKirN2k");

bot.start((ctx) =>{
    ctx.reply(`Bienvenido ${ctx.from.first_name}, a Programación Computacional IV Grupo-A1`);
});

//comando perzonalizado
bot.command(["saludar", "saludo", "comando"], (ctx) => {
    ctx.reply("¿Qué desea realizar?");
});

//emoji
bot.command(["fiesta", "cumpleaños", "felicidades"], (ctx) => {
    ctx.reply("[🥳 Feliz Celebración 🥳]");
});

//Iniciar el Bot
bot.launch();