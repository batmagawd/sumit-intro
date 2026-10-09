const audio=document.getElementById("audio"),play=document.getElementById("play"),bar=document.getElementById("bar"),disc=document.getElementById("disc");
play.onclick=async()=>{if(audio.paused){try{await audio.play();play.textContent="❚❚";disc.classList.add("playing")}catch(e){alert("Music file not found. Keep music.mp3 in the same folder.")}}else{audio.pause();play.textContent="▶";disc.classList.remove("playing")}};
audio.ontimeupdate=()=>{if(audio.duration)bar.style.width=(audio.currentTime/audio.duration*100)+"%"};
audio.onended=()=>{play.textContent="▶";disc.classList.remove("playing");bar.style.width="0"}; 
const audio2 = document.getElementById("audio2");
const play2 = document.getElementById("play2");
const disc2 = document.getElementById("disc2");
const bar2 = document.getElementById("bar2");

if (audio2 && play2 && disc2 && bar2) {
  play2.addEventListener("click", async () => {
    try {
      if (audio2.paused) {
        await audio2.play();
        play2.textContent = "❚❚";
        disc2.classList.add("playing");
      } else {
        audio2.pause();
        play2.textContent = "▶";
        disc2.classList.remove("playing");
      }
    } catch (error) {
      console.error("New song could not play:", error);
    }
  });

  audio2.addEventListener("timeupdate", () => {
    if (audio2.duration) {
      bar2.style.width =
        (audio2.currentTime / audio2.duration * 100) + "%";
    }
  });

  audio2.addEventListener("ended", () => {
    play2.textContent = "▶";
    disc2.classList.remove("playing");
    bar2.style.width = "0%";
  });

  audio2.addEventListener("pause", () => {
    play2.textContent = "▶";
    disc2.classList.remove("playing");
  });

  audio2.addEventListener("play", () => {
    play2.textContent = "❚❚";
    disc2.classList.add("playing");
  });
}
