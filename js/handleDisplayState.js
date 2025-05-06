const SECTIONS = ["menu", "not-connected", "game", "result"];
let activeSection = SECTIONS[0];

const handleDisplayState = (section) => {
  const $activeSection = document.querySelector(`.${activeSection}`);
  $activeSection.classList.add("hidden");
  const $newSection = document.querySelector(`.${section}`);
  $newSection.classList.remove("hidden");
  activeSection = section;
};

export default handleDisplayState;
