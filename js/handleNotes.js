import detectCatch from "./detectCatch.js";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "./handleCanvas.js";
import { detectCatchStop, toggleDetectCatchStop } from "./resetGame.js";
export const NOTE_WIDTH = 12;
export const NOTE_HEIGHT = 30;

export let notes = [];
export let notesIntervalId;

const moveNotes = () => {
  notes = notes.map(({ x, y }) => ({ x: x, y: y + CANVAS_HEIGHT * 0.01 }));
  detectCatch(notes);

  console.log(detectCatchStop);
  if (!detectCatchStop) requestAnimationFrame(moveNotes);
  else toggleDetectCatchStop();
};

const handleNotes = (interval = 500) => {
  notesIntervalId = setInterval(() => {
    const x = Math.floor(Math.random() * (CANVAS_WIDTH - NOTE_WIDTH));
    notes.push({ x: x, y: -NOTE_HEIGHT });
  }, interval);

  requestAnimationFrame(moveNotes);
};

export const removeNote = (i) => {
  notes = [...notes.slice(0, i), ...notes.slice(i + 1)];
};

export const removeAllNotes = () => (notes = []);

export default handleNotes;
