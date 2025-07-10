function validateLogin() {
      const user = document.getElementById("username").value;
      const pass = document.getElementById("password").value;

      if (user === "admin" && pass === "lovinko") {
        window.location.href = "index.html";
        return false;
      } else {
        alert("Incorrect username or password!");
        return false;
      }
    }