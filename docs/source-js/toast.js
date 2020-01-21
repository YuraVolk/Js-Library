//Created by Yury Volkovskiy

const data = {
  TOAST: 'toast-wrap',
  TOAST_INNER: 'toast',
  TOAST_MRK: `<div class="toast">
                <div class="toast__content">
                  <span>Some Toast Content Here</span>
                  <div class="toast__buttons">
                    <button class="btn close-toast__button">OK</button>
                    <button class="btn close-toast__button">Cancel</button>
                  </div>
                </div>
              </div>`, //HTML markup of toast
  TOAST_OPEN_BTN: 'open-toast__button',
  TOAST_CLOSE_BTN: 'close-toast__button'
};

let isHidden = 0;

/**
 * Summary. Show toast.
 */
function showToast() {
  if (isHidden === 0) {
    isHidden = 1;
    const wrap = document.querySelector(`.${data.TOAST}`);
    wrap.insertAdjacentHTML('afterbegin', data.TOAST_MRK);
  }
}

/**
 * Summary. Close toast.
 */
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

/**
 * Summary. Listen for clicks on buttons
 *          and open toasts when needed.
 *
 * @listens click
 */
document.addEventListener('click', (e) => {
  if (e.target.classList[1] === data.TOAST_OPEN_BTN) {
    showToast();
  }
  if (e.target.classList[1] === data.TOAST_CLOSE_BTN) {
    closeToast();
  }
});
