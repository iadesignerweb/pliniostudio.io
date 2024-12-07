// Script de login e menu

document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Previne o comportamento padrão de envio de formulário

  // Obtendo valores de ID e senha
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Verificando se o ID e a senha estão corretos
  if (username === "juamodelos" && password === "paulo") {
    // Se estiver correto, esconde a tela de login e exibe o menu
    document.getElementById("login-container").style.display = "none";
    document.getElementById("menu-container").style.display = "block";
  } else {
    // Caso contrário, exibe uma mensagem de erro
    alert("ID ou senha incorretos!");
  }
});

// Função para abrir o pop-up com a descrição da modelo
function showPopup(title, description, link, videoUrl) {
  document.getElementById("popup-title").textContent = title;
  document.getElementById("popup-description").textContent = description;
  document.getElementById("popup-link").href = link;
  document.getElementById("popup-video").src = videoUrl;
  document.getElementById("popup").style.display = "flex";

  // Inicia o temporizador de 20 segundos para fechar o popup automaticamente
  setTimeout(function() {
    closePopup();
  }, 20000); // 20 segundos
}

// Função para fechar o pop-up
function closePopup() {
  document.getElementById("popup").style.display = "none";
}
