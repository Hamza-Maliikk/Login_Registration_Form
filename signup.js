const form = document.getElementById("signup");
const submitBtn = document.getElementById("submitBtn");
const nameValid = /^[A-Za-zÀ-ÖØ-öø-ÿ'’-]{1}[A-Za-zÀ-ÖØ-öø-ÿ'’\-\s]{1,49}$/;
const emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{3,}$/;
const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
const error = document.getElementById("error");
// LOGIN //

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirm = document.getElementById("confirm").value.trim();
  const nameAlert = document.getElementById("name_alert");
  const emailAlert = document.getElementById("email_alert");
  const passwordAlert = document.getElementById("password_alert");
  const confirmAlert = document.getElementById("confirm_alert");
  
  if(name === "" && email === "" && password === "" && confirm === ""){
    const values = [nameAlert, emailAlert, passwordAlert, confirmAlert]
    values.forEach(alert =>{
      alert.innerText = `Please Enter values`;
    setTimeout(function () {
      nameAlert.innerText = "";
    }, 3000);
    alert.style.color = "red";
    alert.style.position = "relative";
    alert.style.bottom = "45px";
    alert.style.left = "20px";
    alert.style.fontSize = "12px";
    return
    })
  }

  if (!nameValid.test(name)) {
    nameAlert.innerText = `Please Enter valid name`;
    setTimeout(function () {
      nameAlert.innerText = "";
    }, 3000);
    nameAlert.style.color = "red";
    nameAlert.style.position = "relative";
    nameAlert.style.bottom = "45px";
    nameAlert.style.left = "20px";
    nameAlert.style.fontSize = "12px";
    return;
  }
  if (!emailValid.test(email)) {
    emailAlert.innerText = `Please Enter valid email`;
    setTimeout(function () {
      emailAlert.innerText = "";
    }, 3000);
    emailAlert.style.color = "red";
    emailAlert.style.position = "relative";
    emailAlert.style.bottom = "45px";
    emailAlert.style.left = "20px";
    emailAlert.style.fontSize = "12px";
    return;
  }
  if (password == "" && confirm == "") {
    passwordAlert.innerText = `Please Enter password`;
    setTimeout(function () {
      passwordAlert.innerText = "";
    }, 3000);
    passwordAlert.style.color = "red";
    passwordAlert.style.position = "relative";
    passwordAlert.style.bottom = "45px";
    passwordAlert.style.left = "20px";
    passwordAlert.style.fontSize = "12px";
    return;
  }
  if (password !== confirm) {
        confirmAlert.innerText = `Please Enter same password`;
    setTimeout(function () {
      confirmAlert.innerText = "";
    }, 3000);
    confirmAlert.style.color = "red";
    confirmAlert.style.position = "relative";
    confirmAlert.style.bottom = "45px";
    confirmAlert.style.left = "20px";
    confirmAlert.style.fontSize = "12px";
    return;
  }

  const userData = {
    name,
    email,
    password,
    confirm,
  };

  localStorage.setItem("user", JSON.stringify(userData));
  Swal.fire({
    title: "Good job!",
    text: "SignUP successfully",
    icon: "success",
  }).then(() => {
    window.location.replace("./login.html");
  });
});
