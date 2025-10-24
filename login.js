const loginbtn = document.getElementById("login");
const user = JSON.parse(localStorage.getItem("user"));
const localEmail = user.email;
const localPassword = user.password;

loginbtn.addEventListener("click", () => {
  const emailLogin = document.getElementById("login_mail").value;
  const passwordLogin = document.getElementById("login_password").value;
  const emailValidate = document.getElementById("email_login");
  const passwordValidate = document.getElementById("page_login");
  if (emailLogin !== localEmail && passwordLogin !== localPassword) {
    const values = [emailValidate, passwordValidate];
    values.forEach((alerts) => {
      alerts.innerText = `Please Enter values`;
      setTimeout(function () {
        alerts.innerText = "";
      }, 3000);
      alerts.style.color = "red";
      alerts.style.position = "relative";
      alerts.style.bottom = "45px";
      alerts.style.left = "20px";
      alerts.style.fontSize = "12px";
    });
    return;
  } else if (emailLogin !== localEmail && passwordLogin === localPassword) {
    const emailValidate = document.getElementById("email_login");
    emailValidate.innerText = `Please Enter valid email`;
    setTimeout(function () {
      emailValidate.innerText = "";
    }, 3000);
    emailValidate.style.color = "red";
    emailValidate.style.position = "relative";
    emailValidate.style.bottom = "45px";
    emailValidate.style.left = "20px";
    emailValidate.style.fontSize = "12px";
    return;
  } else if (emailLogin === localEmail && passwordLogin !== localPassword) {
    passwordValidate.innerText = `Please Enter valid password`;
    setTimeout(function () {
      passwordValidate.innerText = "";
    }, 3000);
    passwordValidate.style.color = "red";
    passwordValidate.style.position = "relative";
    passwordValidate.style.bottom = "45px";
    passwordValidate.style.left = "20px";
    passwordValidate.style.fontSize = "12px";
    return;
  } else if (emailLogin === localEmail && passwordLogin === localPassword) {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    }).then(() => {
      window.location.replace("./home.html");
    });
  }
});
