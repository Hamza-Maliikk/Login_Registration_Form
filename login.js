const loginbtn = document.getElementById("login");
const user = JSON.parse(localStorage.getItem("user"));
const localEmail = user.email;
const localPassword = user.password;

loginbtn.addEventListener("click", () => {
  const emailLogin = document.getElementById("login_mail").value;
  const passwordLogin = document.getElementById("login_password").value;
  if (emailLogin === localEmail && passwordLogin !== localPassword) {
    alert("Enter correct password");
    return;
  } else if (emailLogin !== localEmail && passwordLogin === localPassword) {
    alert("Enter registered email");
    return;
  } else if (emailLogin === localEmail && passwordLogin === localPassword) {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    }).then(() => {
      window.location.replace("./home.html");
    });
  } else {
    alert("Enter registered Values");
  }
});
