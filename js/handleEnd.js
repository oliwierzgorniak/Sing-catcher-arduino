import { sendEndSignal } from "./handleArduino/handleConnect/connect/handleWrtier.js";
import handleDisplayState from "./handleDisplayState.js";
import resetGame from "./resetGame.js";
import { score } from "./updateScore.js";

export let timeoutId;

const handleEnd = () => {
  timeoutId = setTimeout(() => {
    handleDisplayState("result");

    const $score = document.querySelector(".result__score");
    $score.textContent = score;

    const $menuScore = document.querySelector(".menu__song-score");
    if (localStorage) {
      if (Number($menuScore.textContent) < score)
        localStorage.setItem("Witaj_majowa_jutrzenko", score);
    }

    if (Number($menuScore.textContent) < score) $menuScore.textContent = score;

    resetGame();
    sendEndSignal();
  }, 25000);
};

export default handleEnd;
