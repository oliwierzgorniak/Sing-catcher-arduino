import handleCanvas from "./handleCanvas.js";
import handleEnd from "./handleEnd.js";
import handleSong from "./handleSong.js";
import handleText from "./handleText.js";
import resetGame, { gameWasPlayed } from "./resetGame.js";

const handleUi = () => {
  const songButtons = document.querySelectorAll(".menu__song-button");
  songButtons.forEach(($button) => {
    $button.addEventListener("click", () => {
      const $menu = document.querySelector(".menu");
      $menu.classList.add("hidden");
      if (!gameWasPlayed) {
        const $connecting = document.querySelector(".connecting");
        $connecting.classList.remove("hidden");
      } else {
        const $game = document.querySelector(".game");
        $game.classList.remove("hidden");
        resetGame();

        handleCanvas();
        handleText();
        handleSong();
        handleEnd();
      }
    });
  });

  const $resultButton = document.querySelector(".result__button");
  $resultButton.addEventListener("click", () => {
    const $result = document.querySelector(".result");
    $result.classList.add("hidden");
    const $menu = document.querySelector(".menu");
    $menu.classList.remove("hidden");
  });

  if (localStorage) {
    const score = localStorage.getItem("Witaj_majowa_jutrzenko");
    const $menuScore = document.querySelector(".menu__song-score");
    $menuScore.textContent = typeof score === "string" ? score : 0;
  }
};

export default handleUi;
