const handleSong = () => {
  const $song = document.querySelector(".game__audio");
  $song.play();
};

export const stopSong = () => {
  const $song = document.querySelector(".game__audio");
  $song.pause();
  $song.currentTime = 0;
};

export default handleSong;
