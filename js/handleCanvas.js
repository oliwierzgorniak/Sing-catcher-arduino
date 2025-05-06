import handleNotes, { notes, NOTE_HEIGHT, NOTE_WIDTH } from "./handleNotes.js";
import { drawOnCanvasStop, toggleDrawOnCanvasStop } from "./resetGame.js";
export const CANVAS_WIDTH = 500;
export const CANVAS_HEIGHT = 300;
export const CATCHER_WIDTH = 100;
export const CATCHER_HEIGHT = 10;

export const catcher = {
  x: CANVAS_WIDTH / 2 - CATCHER_WIDTH / 2,
  y: CANVAS_HEIGHT - CATCHER_HEIGHT,
};

const drawOnCanvas = (ctx, $noteImg) => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.fillRect(catcher.x, catcher.y, CATCHER_WIDTH, CATCHER_HEIGHT);
  notes.forEach(({ x, y }) => {
    ctx.drawImage($noteImg, x, y, NOTE_WIDTH, NOTE_HEIGHT);
  });

  if (!drawOnCanvasStop)
    requestAnimationFrame(() => drawOnCanvas(ctx, $noteImg));
  else {
    toggleDrawOnCanvasStop();
  }
};

const handleCanvas = () => {
  const $canvas = document.querySelector(".game__canvas");
  const ctx = $canvas.getContext("2d");
  ctx.fillRect(100, 100, 100, 100);

  handleNotes();

  const $noteImg = document.querySelector(".game__note");
  requestAnimationFrame(() => drawOnCanvas(ctx, $noteImg));
};

export const changeCatcherPosition = (multiplier) => {
  catcher.x = multiplier * (CANVAS_WIDTH - CATCHER_WIDTH);
};

export default handleCanvas;
