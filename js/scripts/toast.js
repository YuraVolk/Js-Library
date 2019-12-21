//Created by Yury Volkovskiy

const data = {
  TOAST: 'toast-wrap',
  TOAST_INNER: 'toast',
  TOAST_MRK: "<div class=\"toast\">\n    <div class=\"toast__content\">\n      <span>Some Toast Content Here</span>\n      <div class=\"toast__buttons\">\n        <button class=\"btn close-toast__button\">OK</button>\n        <button class=\"btn close-toast__button\">Cancel</button>\n      </div>\n    </div>\n  </div>",
  TOAST_OPEN_BTN: 'open-toast__button',
  TOAST_CLOSE_BTN: 'close-toast__button'
};

let isHidden = 0;

function showToast() {
  if (isHidden === 0) {
    isHidden = 1;
    const wrap = document.querySelector(`.${data.TOAST}`);
    wrap.insertAdjacentHTML('afterbegin', data.TOAST_MRK);
  }
}

function closeToast() {
  if (isHidden === 1) {
    isHidden = 2;
    const toast = document.querySelector(`.${data.TOAST_INNER}`);
    toast.style.bottom = '-200px';
    setTimeout(() => {
      toast.remove();
      isHidden = 0;
    }, 1000);
  }
}

document.addEventListener('click', (e) => {
  if (e.target.classList[1] === data.TOAST_OPEN_BTN) {
    showToast();
  }
  if (e.target.classList[1] === data.TOAST_CLOSE_BTN) {
    closeToast();
  }
});
