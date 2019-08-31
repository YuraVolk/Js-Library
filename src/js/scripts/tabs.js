const changeTab = function (tabNumber) {
  const tabToSave = document.querySelector(`.tabs--${tabNumber}`);
  Array.from(document.querySelectorAll('.tabs')).forEach(el => {
    el.style.display = 'none';
  });
  tabToSave.style.display = 'block';
};

document.addEventListener('click', event => {
  if (`.${event.target.classList[0]}` === '.tab') {
    changeTab(event.target.classList[1].slice(-1));
  }
});

changeTab(0);
