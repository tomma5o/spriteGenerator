import SpriteGenerator from "./SpriteGenerator";

const canvas = document.getElementById("canvas");
const downloadBtn = document.getElementById("download_btn");
const reloadBtn = document.getElementById("reload_btn");

const sprite = new SpriteGenerator(canvas, {
  cellXrow: 5
});
sprite.init();

reloadBtn.addEventListener("click", () => {
  sprite.init();
});

downloadBtn.addEventListener("click", () => {
  let link = document.createElement("a");
  link.download = "generated.png";
  link.href = document.getElementById("canvas").toDataURL("image/png");
  link.click();
});
