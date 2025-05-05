import { notesIntervalId, removeAllNotes } from "./handleNotes.js";
import updateScore, { resetScore } from "./updateScore.js";

export let drawOnCanvasStop = false;
export let detectCatchStop = false;
export let gameWasPlayed = false;

const resetGame = () => {
  removeAllNotes();
  clearInterval(notesIntervalId);
  resetScore();
  drawOnCanvasStop = true;
  detectCatchStop = true;
  updateScore(0);
};

export const toggleDrawOnCanvasStop = () =>
  (drawOnCanvasStop = !drawOnCanvasStop);
export const toggleDetectCatchStop = () => (detectCatchStop = !detectCatchStop);
export const setGameWasPlayed = (value) => (gameWasPlayed = value);

export default resetGame;
