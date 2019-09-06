let isHidden = 0;

function showToast() {
  if (isHidden === 0) {
    isHidden = 1;
    const wrap = document.querySelector('.toast-wrap');
    wrap.insertAdjacentHTML('afterbegin', `<div class="toast">
    <div class="justify">
      <span>Some Toast Content Here</span>
      <div class="flexbox-toast">
        <button class="modalButton closeToast">OK</button>
        <button class="modalButton closeToast">Cancel</button>
      </div>
    </div>
  </div>`);
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
