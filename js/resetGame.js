import { removeAllNotes } from "./handleNotes.js";
import updateScore, { resetScore } from "./updateScore.js";

export let drawOnCanvasStop = false;
export let detectCatchStop = false;
export let gameWasPlayed = false;
export let moveNotesStop = false;

const resetGame = () => {
  removeAllNotes();
  resetScore();
  updateScore(0);

  if (gameWasPlayed) {
    moveNotesStop = true;
    drawOnCanvasStop = true;
    detectCatchStop = true;
    setGameWasPlayed(false);
  }
};

export const toggleDrawOnCanvasStop = () =>
  (drawOnCanvasStop = !drawOnCanvasStop);
export const toggleDetectCatchStop = () => (detectCatchStop = !detectCatchStop);
export const setMoveNotesStop = (value) => (moveNotesStop = value);
export const setGameWasPlayed = (value) => (gameWasPlayed = value);

export default resetGame;
