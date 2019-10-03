var x, i, j;
x = document.getElementsByClassName("custom__select");

for (i = 0; i < x.length; i++) {
  const select = x[i].querySelector('select');
  x[i].insertAdjacentHTML('beforeend', `
    <div class="select-selected">
      ${select.options[select.selectedIndex].innerHTML}
    </div>
  `);
  const a = x[i].lastElementChild;
  x[i].insertAdjacentHTML('beforeend', `
    <div class="select-items select-hide"></div>
  `);
  var b = x[i].lastElementChild;
  for (j = 1; j < select.length; j++) {
    b.insertAdjacentHTML('beforeend', `
    <div>${select.options[j].innerHTML}</div>
    `);
    let c = b.lastElementChild;
    c.addEventListener("click", function(event) {
        const s = event.target.parentNode.parentNode.querySelectorAll("select")[0];
        const h = event.target.parentNode.previousElementSibling;
        for (let i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == event.target.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = event.target.innerHTML;
            const y = Array.from(event.target.parentNode.querySelectorAll(".same-as-selected"));
            y.forEach((el) => el.removeAttribute("class"));
            event.target.classList.add("same-as-selected");
            break;
          }
        }
    });
  }
  a.addEventListener("click", function(event) {
      event.stopPropagation();
      closeAllSelect(event.target);
      event.target.nextElementSibling.classList.toggle("select-hide");
      event.target.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(el) {
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (el == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

window.addEventListener('scroll', () => {
  closeAllSelect();
});

document.addEventListener('click', () => {
  closeAllSelect();
});
