import SpriteGenerator from "./SpriteGenerator";

const canvas = document.getElementById("canvas");
const sampleMail = "tptommy1992gmailcom";
const sampleUserMail = "tptommy1992";
const mailLength = sampleUserMail.length.toString();
const getValueMail =
  mailLength.length > 1
    ? mailLength.split("").reduce((acc, e) => acc + Number(e), 0)
    : Number(mailLength);

new SpriteGenerator(canvas, {
  cellXrow: 5,
  colorPalette: getValueMail
}).init();
