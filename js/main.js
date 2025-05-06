import handleArduino from "./handleArduino.js";
import handleConnect from "./handleArduino/handleConnect.js";
import handleCanvas from "./handleCanvas.js";
import handleEnd from "./handleEnd.js";
import { removeAllNotes } from "./handleNotes.js";
import handleSong from "./handleSong.js";
import handleText from "./handleText.js";
import handleUi from "./handleUi.js";
import resetGame, { gameWasPlayed, setGameWasPlayed } from "./resetGame.js";

// https://github.com/devinekask/creative-code-4-s25/blob/main/webrtc/projects/p04-simple-peer/public/receiver.html

const init = async () => {
  handleArduino();
  handleUi();
};

// const $connecting = document.querySelector(".connecting");
// $connecting.classList.add("hidden");
// const $game = document.querySelector(".game");
// $game.classList.remove("hidden");

// if (gameWasPlayed) resetGame();
// setGameWasPlayed(true);

// handleCanvas();
// handleText();
// handleSong();
// handleEnd();

init();
