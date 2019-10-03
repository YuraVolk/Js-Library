if (/%3C[^%3E]*%3E/g.test(window.location.href)) {
     window.location.href = 'http://localhost:8080/';
}

function preventAttack(val, regexes) {
  for (let test in regexes) {
    console.log(regexes[test].test(val));
  }
}

function validateInput(input) {
  console.log()
  preventAttack(input.value, [
    new RegExp(/<script[\s\S]*?>[\s\S]*?<\/script>/gi),
    new RegExp(/<img[\s\S]*?>[\s\S]*?<\/img>/gi),
    new RegExp(/onerror/g),
    new RegExp(/<link[\s\S]*?>[\s\S]*?<\/link>/gi)
  ]);
}

document.querySelector('.register').querySelector('input[type="submit"]').addEventListener('click', (e) => {
  e.preventDefault();
  validateInput(document.querySelector('.register_name'));
});
