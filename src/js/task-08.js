const btnSubmit = document.querySelector('[type="submit');
const password = document.querySelector('[type="password"]');
const email = document.querySelector('[type="email"]');
const loginForm = document.querySelector('.login-form');

btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();

    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!")
    }
console.log(`Email: ${email.value}, Password: ${password.value}`);
loginForm.reset()
})
 
