import {
  CANVAS_HEIGHT,
  catcher,
  CATCHER_HEIGHT,
  CATCHER_WIDTH,
} from "./handleCanvas.js";
import { NOTE_HEIGHT, NOTE_WIDTH, notes, removeNote } from "./handleNotes.js";
import updateScore from "./updateScore.js";

const detectCatch = () => {
  notes.forEach((note, i) => {
    if (note.y + NOTE_HEIGHT * 0.7 < CANVAS_HEIGHT - CATCHER_HEIGHT) return;
    if (note.y > CANVAS_HEIGHT) removeNote(i);
    else if (
      note.x + NOTE_WIDTH > catcher.x &&
      note.x < catcher.x + CATCHER_WIDTH
    ) {
      updateScore(1);
      removeNote(i);
    }
  });
};

export default detectCatch;
