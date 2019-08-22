
var sections = Array.from(document.querySelectorAll('.accordion'));
const widths = [];

Array.from(document.querySelectorAll('.accordion__content')).forEach(el => {
    widths.push(el.offsetHeight);
});

sections.forEach(el => {
    el.classList.add("hidden");
    el.style.maxHeight = "";
});

function switchAccordion(target) {
    if (target.classList[1] === "hidden") {
        sections.forEach(el => {
            el.classList.add("hidden");
            el.style.maxHeight = "";
        });
        target.style.maxHeight = widths[sections.indexOf(target)] + 40 + 'px';
        target.classList.remove("hidden");
    } else {
        target.style.maxHeight = "";
        target.classList.add("hidden");
    }
}

document.addEventListener('click', event => { 
    if (event.target.classList[0] === "accordion__heading") {
        switchAccordion(event.target.parentNode);
    }
});