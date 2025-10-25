const welcome = document.getElementById('welcome')
const user = JSON.parse(localStorage.getItem('user'))
const name = user.name


welcome.innerHTML = `
Welcome <span class='name'>${name}</span> 
`
