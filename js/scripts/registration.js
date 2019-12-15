//Created by Yury Volkovskiy


if (/%3C[^%3E]*%3E/g.test(window.location.href)) {
     window.location.href = 'http://localhost:8080/';
}

const registerForm = document.querySelector('.register');

function preventAttack(input, regexes) {
  for (let test in regexes) {
    input.value = input.value.replace(regexes[test], "");
    console.log(input.value);
  }
}

function validateInput(input) {
  preventAttack(input, [
    new RegExp(/<script[\s\S]*?>[\s\S]*?<\/script>/gi),
    new RegExp(/<img[\s\S]*?>[\s\S]*?<\/img>/gi),
    new RegExp(/<link[\s\S]*?>[\s\S]*?<\/link>/gi)
  ]);
}

registerForm.querySelector('button').addEventListener('click', (e) => {
  const inputs = Array.from(registerForm.querySelectorAll('input'));
  inputs.forEach((el) => {
    validateInput(el);
  })
});

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
});
