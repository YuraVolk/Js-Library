//Created by Yury Volkovskiy

const data = {
  TABS: 'tab',
  TAB: 'tab__link'
}

/**
 * Summary. Change current tab.
 *
 * @param {Number} tabNumber Index of tab
 */
const changeTab = function (tabNumber) {
  const tabToSave = document.querySelector(`.${data.TABS}--${tabNumber}`);
  Array.prototype.slice.call(document.querySelectorAll(`.${data.TABS}`)).forEach(el => {
    el.style.display = 'none';
  });
  tabToSave.style.display = 'block';
};

/**
 * Summary. Listen for clicks on tabs.
 *
 * @listens click
 */
document.addEventListener('click', event => {
  if (event.target.classList[0] === data.TAB) {
    changeTab(event.target.classList[1].slice(-1));
  }
});

changeTab(0);