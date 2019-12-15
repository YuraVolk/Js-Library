//Created by Yury Volkovskiy

const data = {
  TOAST: 'toast-wrap',
  TOAST_INNER: 'toast',
  TOAST_MRK: "<div class=\"toast\">\n    <div class=\"justify\">\n      <span>Some Toast Content Here</span>\n      <div class=\"flexbox-toast\">\n        <button class=\"modalButton closeToast\">OK</button>\n        <button class=\"modalButton closeToast\">Cancel</button>\n      </div>\n    </div>\n  </div>",
  TOAST_OPEN_BTN: 'toastButton',
  TOAST_CLOSE_BTN: 'closeToast'
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
