/*
    Order of initializations.
    * Imports
    * Variables
        * Constant Arrays
        * Arrays
            ! Only active operations.
            ? If about two variables, use two lets.
        * Let and Constants
        * Var
            ? Can be used to work more effectively with timeout loops
            ! Use must be really TASK SPECIFIC
        * Presets
            ? Use is needed only if two classes are connected
    * Functions
        * IIFES
            ! Only inner module pattern or timed closure
        * Classes
        * Function Expressions
            ? Use with closures, IIFES connections and event formats
            ? Const only declaration
        * Function Declarations
    * Standalone code
        ? Timeouts and intervals
        ? Onloads
            ! Service Worker is IIFE
        ? Navigator
        ? Initiations
            ! Observers are not included
            ? Only server side information and server context
        * Promises
    * Event listeners
        * Click listener
        * Scroll, wheel, mousemove
        * Task Aligned
            ? Other event listeners
        * Custom
            ! Event listener MUST be complex and passive
        * MutationObservers
            ! Use only when information is changed.
        * Passive event listeners
    * Shared Array Buffer
        ? Connect code parts to main bundle
        ! If can be replaced easily, do not use SAB
    * Other code
      ? Any other code
    * Debugger
    * Export
        ! Only one export per file
*/

document.addEventListener('click', event => {
  if (event.target.classList[1]) {
    if (event.target.classList[1] === "copy-html__btn" ||
        event.target.classList[1] === "copy-css__btn" ||
        event.target.classList[1] === "copy-js__btn") {
      const num = event.target.classList[2].match(/\d+$/)[0];
      if (event.target.classList.contains("positive") ||
          event.target.classList.contains("negative")) {
            return;
      }
      const val = event.target.textContent;


      try {
        if (event.target.classList[1] === "copy-html__btn") {
          if (num == 6) {
            copyToClipboard(`
            <aside class="sidenav">
              <img src="img/close.png" alt="Close Symbol" class="sidenav__close" width="10" height="10">
              <ul class="sidenav__items"></ul>
            </aside>`);
          } else {
            copyToClipboard(scripts[num].html);
          }

        } else if (event.target.classList[1] === "copy-css__btn") {
          copyToClipboard(scripts[num].css)
        } else {
          copyToClipboard(scripts[num].js)
        }

        event.target.innerHTML = "Success!";
        event.target.classList.add("positive");
        setTimeout(() => {
          event.target.innerHTML = val;
          event.target.classList.remove("positive");
          event.target.classList.remove("negative");
        }, 1000);
      } catch (e) {
        event.target.innerHTML = "Failure!";
        event.target.classList.add("negative");
        setTimeout(() => {
          event.target.innerHTML = val;
          event.target.classList.remove("positive");
          event.target.classList.remove("negative");
        }, 3000);
      }

    }
  }
});

let virtualDocument;

(async () => {
  virtualDocument = document.createRange().createContextualFragment(await xmlHTTP("source-html/source.html"));
})();

const Script = {
  set html(path) {
    this.html_path = path;
  },

  set css(path) {
    this.css_path = path;
  },

  set js(path) {
    this.js_path = path;
  },

  get html() {
    return this.html_path;
  },

  get css() {
    return this.css_path;
  },

  get js() {
    return this.js_path;
  }
};

const scripts = new Array(200);

const area = document.createElement("textarea");
area.classList = "textarea-clipboard";
document.body.appendChild(area);

function copyToClipboard(str) {
  area.value = str;
  area.select();
  document.execCommand("copy");
}


async function xmlHTTP(path) {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState === 4 && xhttp.status == 200){
            const result = xhttp.responseText;
            resolve(result);
        }
    }

    xhttp.open('GET', path);
    xhttp.send();
  });
}

async function createScript(js_path, css_path, html_index) {
  const css = await xmlHTTP(css_path);
  const js = await xmlHTTP(js_path);
  const container = virtualDocument.querySelectorAll("section")[html_index];
  const html = container.children[container.children.length - 2].outerHTML;

  const script = Object.create(Script);
  script.html = html;
  script.css = css;
  script.js = js;

  scripts[html_index] = script;
}

createScript("source-js/filtering.js", "source-css/filter.less", 1);
createScript("source-js/pagination.js", "source-css/pagination.less", 2);
createScript("source-js/videoset.js", "source-css/videoset.less", 3);
createScript("source-js/tabs.js", "source-css/tabs.less", 4);
createScript("source-js/colorPicker.js", "source-css/colorPicker.less", 5);
createScript("source-js/sidebar.js", "source-css/sidebar.less", 6);
createScript("source-js/floating.js", "source-css/floating.less", 7);
createScript("source-js/popup.js", "source-css/popup.less", 8);
createScript("source-js/3dcarousel.js", "source-css/3dcarousel.less", 9);
createScript("source-js/accordion.js", "source-css/accordion.less", 10);
createScript("source-js/typer.js", "source-css/typer.less", 11);
createScript("source-js/rebuildingText.js", "source-css/bubbletext.less", 12);
createScript("source-js/cipheringText.js", "source-css/cipheringText.less", 13);
createScript("source-js/3dcarouselMenu.js", "source-css/3dcarouselMenu.less", 14);
createScript("source-js/zoomer.js", "source-css/zoomer.less", 15);
createScript("source-js/stickyHeader.js", "source-css/stickyHeader.less", 16);
createScript("source-js/upcomingWindow.js", "source-css/upcomingWindow.less", 17);
createScript("source-js/onePageScroll.js", "source-css/onePageScroll.less", 18);
createScript("source-js/calculator.js", "source-css/calculator.less", 19);
createScript("source-js/screenInvert.js", "source-css/screenInvert.less", 20);
createScript("source-js/autocomplete.js", "source-css/autocomplete.less", 21);
createScript("source-js/imageComparsion.js", "source-css/imageComparsion.less", 22);
createScript("source-js/toast.js", "source-css/toast.less", 23);
createScript("source-js/gallery.js", "source-css/gallery.less", 24);
createScript("source-js/magnifier.js", "source-css/magnifier.less", 25);
createScript("source-js/parallax.js", "source-css/parallax.less", 26);
createScript("source-js/countdown.js", "source-css/countdown.less", 27);
createScript("source-js/tableFiltering.js", "source-css/tableFiltering.less", 28);
createScript("source-js/validation.js", "source-css/validation.less", 29);
createScript("source-js/perspectiveCarousel.js", "source-css/perspectiveCarousel.less", 30);
createScript("source-js/customSelect.js", "source-css/customSelect.less", 31);
