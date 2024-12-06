// Função para abrir o pop-up com as informações corretas
function showPopup(title, description, link, image) {
  // Preenche os dados do pop-up
  document.getElementById('popup-title').textContent = title;
  document.getElementById('popup-description').textContent = description;
  document.getElementById('popup-link').href = link;
  document.getElementById('popup-image').src = image;
  
  // Exibe o pop-up
  document.getElementById('popup').style.display = 'flex';
}

// Função para fechar o pop-up
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Função para validar o login
function validateLogin(event) {
  event.preventDefault(); // Previne o envio padrão do formulário

  // Credenciais fictícias para validação (pode ser substituído por um sistema real)
  const validUsername = 'admin';
  const validPassword = '12345';

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Verifica se o ID e a senha estão corretos
  if (username === validUsername && password === validPassword) {
    // Esconde o formulário de login e exibe o menu
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('menu-container').style.display = 'block';
  } else {
    alert('ID ou senha incorretos. Tente novamente.');
  }
}

// Adiciona o evento de submit ao formulário de login
document.getElementById('login-form').addEventListener('submit', validateLogin);