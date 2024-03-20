let pass1 = document.querySelector('#password');
let pass2 = document.querySelector('#confirmPassword');

function checkPassword () {
    match.innerText = pass1.value == pass2.value ? 'Matching' : "Noth Matching";
}

pass1.addEventListener('keyup', () => {
    if (pass2.value.length != 0) checkPassword();
})

pass2.addEventListener('keyup', checkPassword);