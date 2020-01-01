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
      const num = event.target.classList[2][event.target.classList[2].length - 1];
      if (event.target.classList.contains("positive") ||
          event.target.classList.contains("negative")) {
            return;
      }
      const val = event.target.textContent;


      try {
        if (event.target.classList[1] === "copy-html__btn") {
          if (num != 6) {
            copyToClipboard(scripts[num].html);
          } else {

            copyToClipboard(`
            <aside class="sidenav">
              <img src="img/close.png" alt="Close Symbol" class="sidenav__close" width="10" height="10">
              <ul class="sidenav__items"></ul>
            </aside>`);
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
  const container = document.querySelectorAll("section")[html_index];
  const html = container.children[container.children.length - 2].outerHTML;

  const script = Object.create(Script);
  script.html = html;
  script.css = css;
  script.js = js;

  scripts[html_index] = script;
}

createScript("source-js/carousel.js", "source-css/carousel.less", 0);
createScript("source-js/filtering.js", "source-css/filter.less", 1);
createScript("source-js/pagination.js", "source-css/pagination.less", 2);
createScript("source-js/videoset.js", "source-css/videoset.less", 3);
createScript("source-js/tabs.js", "source-css/tabs.less", 4);
createScript("source-js/colorPicker.js", "source-css/colorPicker.less", 5);
createScript("source-js/sidebar.js", "source-css/sidebar.less", 6);
createScript("source-js/floating.js", "source-css/floating.less", 7);
createScript("source-js/3dcarousel.js", "source-css/3dcarousel.less", 8);
