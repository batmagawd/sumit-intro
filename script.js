const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", async () => {
  if (audio.paused) {
    try {
      await audio.play();
      playBtn.textContent = "❚❚";
    } catch (e) {
      alert("Add your audio file as music.mp3 in this folder.");
    }
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
});

audio.addEventListener("ended", () => {
  playBtn.textContent = "▶";
});
