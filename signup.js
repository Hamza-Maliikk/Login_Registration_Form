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

  if (!nameValid.test(name)) {
    alert("Please Enter a Valid Name");
    return;
  }
  if (!emailValid.test(email)) {
    alert("Please enter Valid email");
    return;
  }
  if (password == "" || confirm == "") {
    alert("Enter Password");
    return;
  }
  if (password !== confirm) {
    alert("Enter same password ");
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
