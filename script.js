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

// Pop-up
function showPopup(title, description, link, image) {
  document.getElementById("popup-title").textContent = title;
  document.getElementById("popup-description").textContent = description;
  document.getElementById("popup-link").href = link;
  document.getElementById("popup-image").src = image;

  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
