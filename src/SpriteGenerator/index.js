import { random } from "lodash";
import palette from "../utils/palette";

export default class SpriteGenerator {
  constructor(canvas, settings) {
    const { cellXrow } = settings;
    this.ctx = canvas.getContext("2d");
    this.settings = {
      cellXrow,
      cellSize: canvas.width / cellXrow,
      rowWidth: canvas.width
    };
  }

  drawCell(x, y, cellSize, sortedColor) {
    this.ctx.fillStyle = sortedColor;
    this.ctx.fillRect(x, y, cellSize, cellSize);
  }

  drawRows(j, color) {
    const { cellXrow, cellSize, rowWidth } = this.settings;
    let cellsAmount = 0;
    const maxCellCurrentRow = random(1, cellXrow / 2);

    for (let i = 0; i < cellXrow / 2; i++) {
      const x = i * cellSize;
      const y = j * cellSize;
      const sortedColor = color[random(0, 4)];
      const skip = random(0, 1);

      if (skip && cellsAmount < maxCellCurrentRow) {
        this.drawCell(x, y, cellSize, sortedColor);
        this.drawCell(rowWidth - cellSize - x, y, cellSize, sortedColor);

        cellsAmount++;
      }
    }
  }

  draw(cellSize) {
    const { rowWidth } = this.settings;
    const color = palette[random(0, 4)];
    this.ctx.clearRect(0, 0, rowWidth, rowWidth);

    for (let j = 0; j < cellSize; j++) {
      this.drawRows(j, color);
    }
  }

  init() {
    const { cellSize } = this.settings;

    try {
      this.draw(cellSize);
    } catch (e) {
      console.error(e);
    }
  }
}
