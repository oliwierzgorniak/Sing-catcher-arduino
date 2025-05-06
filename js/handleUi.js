import {
  handleClickConnect,
  isConnected,
} from "./handleArduino/handleConnect.js";
import { sendResetSignal } from "./handleArduino/handleConnect/connect/handleWrtier.js";
import handleCanvas from "./handleCanvas.js";
import handleDisplayState from "./handleDisplayState.js";
import handleEnd from "./handleEnd.js";
import handleSong from "./handleSong.js";
import handleText from "./handleText.js";
import { setGameWasPlayed } from "./resetGame.js";

const handleUi = () => {
  const songButtons = document.querySelectorAll(".menu__song-button");
  songButtons.forEach(($button) => {
    $button.addEventListener("click", () => {
      if (!isConnected) {
        handleDisplayState("not-connected");
      } else {
        sendResetSignal();
        handleDisplayState("game");

        handleCanvas();
        handleText();
        handleSong();
        handleEnd();

        setGameWasPlayed(true);
      }
    });
  });

  const $resultButton = document.querySelector(".result__button");
  $resultButton.addEventListener("click", () => {
    handleDisplayState("menu");
    sendResetSignal();
  });

  const $connectButton = document.querySelector(".menu__connect");
  $connectButton.addEventListener("click", () => {
    if (!isConnected) {
      handleClickConnect();
    }
  });

  if (localStorage) {
    const score = localStorage.getItem("Witaj_majowa_jutrzenko");
    const $menuScore = document.querySelector(".menu__song-score");
    $menuScore.textContent = typeof score === "string" ? score : 0;
  }

  const $notConnectedButton = document.querySelector(".not-connected__button");
  $notConnectedButton.addEventListener("click", () => {
    handleDisplayState("menu");
  });
};

export default handleUi;
