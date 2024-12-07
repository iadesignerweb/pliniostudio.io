// Login
document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "12345") {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("menu-container").style.display = "block";
  } else {
    alert("ID ou senha incorretos!");
  }
});

// Pop-up com vídeo
let timerInterval;
function showPopup(title, description, link, videoUrl) {
  document.getElementById("popup-title").textContent = title;
  document.getElementById("popup-description").textContent = description;
  document.getElementById("popup-link").href = link;
  document.getElementById("popup-video").src = videoUrl;

  // Iniciar contagem regressiva
  let timeLeft = 20;
  document.getElementById("popup-timer").textContent = `Começando em: ${timeLeft} segundos`;
  timerInterval = setInterval(function() {
    timeLeft--;
    document.getElementById("popup-timer").textContent = `Começando em: ${timeLeft} segundos`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      document.getElementById("popup-timer").textContent = "Vídeo em breve!";
      document.getElementById("popup-video").style.display = "block";
    }
  }, 1000);

  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  // Iniciar o vídeo
  let video = document.getElementById("popup-video");
  video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
}

// Bloquear botão voltar até o final do vídeo
let videoFinished = false;
document.getElementById("popup-video").addEventListener('ended', function() {
  videoFinished = true;
  document.getElementById("popup-link").style.display = "
