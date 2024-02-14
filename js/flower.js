onload = () => {
  document.body.classList.remove('container');
  // Membuat elemen audio
  const audio = new Audio('audio/audio.mp3');
  // Mengatur loop untuk pemutaran berulang
  audio.loop = true;
  // Memulai pemutaran
  audio.play();
};
