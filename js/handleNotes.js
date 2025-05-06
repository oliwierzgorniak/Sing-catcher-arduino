import detectCatch from "./detectCatch.js";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "./handleCanvas.js";
import {
  detectCatchStop,
  moveNotesStop,
  setMoveNotesStop,
  toggleDetectCatchStop,
} from "./resetGame.js";
export const NOTE_WIDTH = 12;
export const NOTE_HEIGHT = 30;

export let notes = [];
export let notesMultiplier = 0.5;

const moveNotes = () => {
  notes = notes.map(({ x, y }) => ({
    x: x,
    y: y + CANVAS_HEIGHT * 0.02 * notesMultiplier,
  }));
  detectCatch(notes);

  if (!detectCatchStop) requestAnimationFrame(moveNotes);
  else toggleDetectCatchStop();
};

const timeoutFunction = (interval) => {
  const x = Math.floor(Math.random() * (CANVAS_WIDTH - NOTE_WIDTH));
  notes.push({ x: x, y: -NOTE_HEIGHT });

  const timeout = interval * (1 - notesMultiplier + 0.5);
  if (!moveNotesStop) setTimeout(() => timeoutFunction(interval), timeout);
  else setMoveNotesStop(false);
};

const handleNotes = (interval = 500) => {
  const initialTimeout = interval * (1 - notesMultiplier + 0.1);
  setTimeout(() => {
    timeoutFunction(interval);
  }, initialTimeout);

  requestAnimationFrame(moveNotes);
};

export const removeNote = (i) => {
  notes = [...notes.slice(0, i), ...notes.slice(i + 1)];
};

export const removeAllNotes = () => (notes = []);

export const setNotesMultiplier = (value) => (notesMultiplier = value + 0.1);

export default handleNotes;
