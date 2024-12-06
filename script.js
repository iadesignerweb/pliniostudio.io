const loginForm = document.getElementById("login-form");
const loginContainer = document.getElementById("login-container");
const menuContainer = document.getElementById("menu-container");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupDescription = document.getElementById("popup-description");
const popupLink = document.getElementById("popup-link");
const popupImage = document.getElementById("popup-image");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "IaDesigner" && password === "13161316") {
    loginContainer.style.display = "none";
    menuContainer.style.display = "block";
  } else {
    alert("ID ou senha incorretos!");
  }
});

function showPopup(title, description, link, imageSrc) {
  popupTitle.textContent = title;
  popupDescription.textContent = description;
  popupLink.href = link;
  popupImage.src = imageSrc;
  popup.style.display = "flex";
}

function closePopup() {
  popup.style.display = "none";
}