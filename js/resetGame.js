import { notesIntervalId, removeAllNotes } from "./handleNotes.js";
import updateScore, { resetScore } from "./updateScore.js";

export let drawOnCanvasStop = false;
export let detectCatchStop = false;
export let gameWasPlayed = false;
export let moveNotesStop = false;

const resetGame = () => {
  removeAllNotes();
  moveNotesStop = true;
  resetScore();
  drawOnCanvasStop = true;
  detectCatchStop = true;
  updateScore(0);
};

export const toggleDrawOnCanvasStop = () =>
  (drawOnCanvasStop = !drawOnCanvasStop);
export const toggleDetectCatchStop = () => (detectCatchStop = !detectCatchStop);
export const toggleMoveNotesStop = () => (moveNotesStop = !moveNotesStop);
export const setGameWasPlayed = (value) => (gameWasPlayed = value);

export default resetGame;
