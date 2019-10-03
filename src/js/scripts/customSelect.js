var x, i, j, selElmnt;
x = document.getElementsByClassName("custom__select");

for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  x[i].insertAdjacentHTML('beforeend', `
    <div class="select-selected">
      ${selElmnt.options[selElmnt.selectedIndex].innerHTML}
    </div>
  `);
  const a = x[i].lastElementChild;
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  x[i].insertAdjacentHTML('beforeend', `
    <div class="select-items select-hide"></div>
  `);
  var b = x[i].lastElementChild;
  for (j = 1; j < selElmnt.length; j++) {
    b.insertAdjacentHTML('beforeend', `
    <div>${selElmnt.options[j].innerHTML}</div>
    `);
    let c = b.lastElementChild;
    c.addEventListener("click", function() {
        const s = this.parentNode.parentNode.querySelectorAll("select")[0];
        const h = this.parentNode.previousElementSibling;
        for (let i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            const y = Array.from(this.parentNode.querySelectorAll(".same-as-selected"));
            y.forEach((el) => el.removeAttribute("class"));
            this.classList.add("same-as-selected");
            break;
          }
        }
    });
  }
  a.addEventListener("click", function(e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextElementSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
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
