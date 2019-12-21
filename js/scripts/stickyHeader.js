//Created by Yury Volkovskiy
const data = {
  HEADER_NORMAL: 'sticky-header--normal',
  HEADER_SCROLL: 'sticky-header--sticked',
  HIDDEN: 'sticky-header--hidden'
}

let bounding;
let topE = document.querySelector(`.${data.HEADER_NORMAL}`);
let bottomE = document.querySelector(`.${data.HEADER_SCROLL}`);
topE.parentNode.onscroll = () => {
  setTimeout(() => {
    bounding = topE.getBoundingClientRect();
    if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
      && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
      if (!bottomE.classList.contains(data.HIDDEN)) {
        bottomE.classList.add(data.HIDDEN);
      }
      if (topE.classList.contains(data.HIDDEN)) {
        topE.classList.remove(data.HIDDEN);
      }
    } else {
      if (!topE.classList.contains(data.HIDDEN)) {
        topE.classList.add(data.HIDDEN);
      }
      if (bottomE.classList.contains(data.HIDDEN)) {
        bottomE.classList.remove(data.HIDDEN);
      }
    }
  }, 47);
};
