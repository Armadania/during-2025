// toggle open popup
const popup = document.querySelector(".login-popup");
document.querySelector(".open-popup").onclick = () => {
  popup.classList.toggle("active");
};

// toggle close popup
document.querySelector(".close-button").onclick = () => {
  popup.classList.remove("active");
};

// checkbox remember me
document.addEventListener("DOMContentLoaded", function () {
  const rememberCheckbox = document.getElementById("checkbox");
  const usernameInput = document.querySelector('input[type="text"]');
  const passwordInput = document.querySelector('input[type="password"]');

  // Mengecek apakah ada nilai yang tersimpan untuk "Remember Me"
  const rememberMe = localStorage.getItem("rememberMe") === "true";
  if (rememberMe) {
    // Jika ada, setel nilai input dari localStorage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");
    if (savedUsername && savedPassword) {
      usernameInput.value = savedUsername;
      passwordInput.value = savedPassword;
      rememberCheckbox.checked = true;
    }
  }

  // Event listener untuk checkbox "Remember Me"
  rememberCheckbox.addEventListener("change", function () {
    if (rememberCheckbox.checked) {
      // Jika checkbox diperiksa, simpan nilai input ke dalam localStorage
      localStorage.setItem("username", usernameInput.value);
      localStorage.setItem("password", passwordInput.value);
      localStorage.setItem("rememberMe", true);
    } else {
      // Jika checkbox tidak diperiksa, hapus nilai yang tersimpan di localStorage
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      localStorage.removeItem("rememberMe");
    }
  });
});

// form submit untuk menuju tab lain
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Dapatkan nilai username dan password
    const username = form.querySelector('input[type="text"]').value;
    const password = form.querySelector('input[type="password"]').value;

    // Periksa jika username dan password cocok
    if (username === "Armadania_Anggun" && password === "01January") {
      window.location.href = "USER/january.html";
    } else if (username === "Armadania_Anggun" && password === "02February") {
      window.location.href = "USER/february.html";
    } else if (username === "Armadania_Anggun" && password === "03March") {
      window.location.href = "USER/march.html";
    } else if (username === "Armadania_Anggun" && password === "04April") {
      window.location.href = "USER/april.html";
    } else if (username === "Armadania_Anggun" && password === "05May") {
      window.location.href = "USER/may.html";
    } else if (username === "Armadania_Anggun" && password === "06June") {
      window.location.href = "USER/june.html";
    } else if (username === "Armadania_Anggun" && password === "07July") {
      window.location.href = "USER/july.html";
    } else if (username === "Armadania_Anggun" && password === "08August") {
      window.location.href = "USER/august.html";
    } else if (username === "Armadania_Anggun" && password === "09September") {
      window.location.href = "USER/september.html";
    } else if (username === "Armadania_Anggun" && password === "10October") {
      window.location.href = "USER/october.html";
    } else if (username === "Armadania_Anggun" && password === "11November") {
      window.location.href = "USER/november.html";
    } else if (username === "Armadania_Anggun" && password === "12December") {
      window.location.href = "USER/december.html";
    } else {
      alert("Username atau password salah.");
    }
  });
});
