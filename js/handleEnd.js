import { score } from "./updateScore.js";

const handleEnd = () => {
  setTimeout(() => {
    const $game = document.querySelector(".game");
    $game.classList.add("hidden");
    const $result = document.querySelector(".result");
    $result.classList.remove("hidden");

    const $score = $result.querySelector(".result__score");
    $score.textContent = score;

    const $menuScore = document.querySelector(".menu__song-score");
    if (localStorage) {
      if (Number($menuScore.textContent) < score)
        localStorage.setItem("Witaj_majowa_jutrzenko", score);
    }

    if (Number($menuScore.textContent) < score) $menuScore.textContent = score;
  }, 25000);
};

export default handleEnd;
