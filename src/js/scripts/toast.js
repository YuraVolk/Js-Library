let isHidden = 0;

function showToast() {
  if (isHidden === 0) {
    isHidden = 1;
    const wrap = document.querySelector('.toast-wrap');
    wrap.insertAdjacentHTML('afterbegin', "<div class=\"toast\">\n    <div class=\"justify\">\n      <span>Some Toast Content Here</span>\n      <div class=\"flexbox-toast\">\n        <button class=\"modalButton closeToast\">OK</button>\n        <button class=\"modalButton closeToast\">Cancel</button>\n      </div>\n    </div>\n  </div>");
  }
}

function closeToast() {
  if (isHidden === 1) {
    isHidden = 2;
    const toast = document.querySelector('.toast');
    toast.style.bottom = '-200px';
    setTimeout(() => {
      toast.remove();
      isHidden = 0;
    }, 1000);
  }
}

document.addEventListener('click', (e) => {
  if (e.target.classList[1] === 'toastButton') {
    showToast();
  }
  if (e.target.classList[1] === 'closeToast') {
    closeToast();
  }
});
