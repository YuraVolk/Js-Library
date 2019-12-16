//Created by Yury Volkovskiy

const x = document.getElementsByClassName("custom__select");

for (let i = 0; i < x.length; i++) {
  const select = x[i].querySelector('select');
  x[i].insertAdjacentHTML('beforeend', "\n    <div class=\"select-selected\">\n      " + select.options[select.selectedIndex].innerHTML + "\n    </div>\n  ");
  const a = x[i].lastElementChild;
  x[i].insertAdjacentHTML('beforeend', "\n    <div class=\"select-items select-hidden\"></div>\n  ");
  var b = x[i].lastElementChild;
  for (let j = 1; j < select.length; j++) {
    b.insertAdjacentHTML('beforeend', "\n    <div>" + select.options[j].innerHTML + "</div>\n    ");
    let c = b.lastElementChild;
    c.addEventListener("click", function (event) {
      if (window.getComputedStyle(event.target.parentNode).getPropertyValue("opacity") == 0) {
        return;
      }
      const selectTest = event.target.parentNode.parentNode.querySelectorAll("select")[0];
      const toTest = event.target.parentNode.previousElementSibling;
      for (let i = 0; i < selectTest.length; i++) {
        if (selectTest.options[i].innerHTML == event.target.innerHTML) {
          selectTest.selectedIndex = i;
          toTest.innerHTML = event.target.innerHTML;
          const options = Array.from(event.target.parentNode.querySelectorAll(".same-as-selected"));
          options.forEach((el) => el.removeAttribute("class"));
          event.target.classList.add("same-as-selected");
          break;
        }
      }
    });
  }

  a.addEventListener("click", function (event) {
    event.stopPropagation();
    closeAllSelect(event.target);
    event.target.nextElementSibling.classList.toggle("select-hidden");
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
      x[i].classList.add("select-hidden");
    }
  }
}

window.addEventListener('scroll', () => {
  closeAllSelect();
});

document.addEventListener('click', () => {
  closeAllSelect();
});
