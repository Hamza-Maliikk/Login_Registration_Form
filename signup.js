const form = document.getElementById("signup");
const submit = document.getElementById("submit");
console.log(submit);

submit.addEventListener("click", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  const userData = {
    name,
    email,
    password,
    confirm,
  };
  localStorage.setItem("user", JSON.stringify(userData));
  alert("Signup");
  form.reset();
});
