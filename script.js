let pass1 = document.querySelector('#password');
let pass2 = document.querySelector('#confirmPassword');
let result = document.querySelector('.match');

function checkPassword () {
    result.innerText = pass1.value == pass2.value ? 'Passwords Match \u2705' : "Passwords Do Not Match \u274c";
}

pass1.addEventListener('keyup', () => {
    if (pass2.value.length != 0) checkPassword();
})

pass2.addEventListener('keyup', checkPassword);