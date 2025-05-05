export let score = 0;

const updateScore = (amount) => {
  score += amount;

  const $score = document.querySelector(".game__score");
  $score.textContent = score;
};

export const resetScore = () => (score = 0);

export default updateScore;
