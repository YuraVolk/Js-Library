let operations = ["0"];
let res = "0";
let curNum = 0;
let element = document.querySelector('.calculator__result');

function renderNum(classEl) {
    if (operations[curNum] === "0") {
        operations[curNum] = "";
    }
    operations[curNum] += classEl[classEl.length - 1];

}

function addFraction() {
    if (!(operations[curNum].indexOf('.') > -1)) {
        operations[curNum] += '.';
    }
}

function addSymbol(symbol) {
    if (operations.length > 1) {
        if (!isNaN(operations[operations.length - 1]) && operations[operations.length - 1].length !== 0) {
            curNum++;
            operations[curNum] = symbol;
            curNum++;
            operations[curNum] = "";
        }
    } else {
        curNum++;
        operations[curNum] = symbol;
        curNum++;
        operations[curNum] = "";
    }
}

function evaluateEquation() {
    if (operations.length > 1) {
        //* Get array to be ready to use
        if (!(typeof operations[operations.length - 2] === 'number') && (operations[operations.length - 1].length === 0)) {
            operations.splice(-2,1);
        }
        if (operations[operations.length - 1].length === 0) {
            operations.pop();
        }
        res = eval(operations.join(" "));
        operations = [res + ""];
        element.textContent = res;
    }
}

document.addEventListener('click', (e) => {
    if (e.target.classList[0] === 'calculator__btn') {
        const classEl = e.target.classList[1]; //* Init Important
        if (!isNaN(classEl[classEl.length - 1])) {
            renderNum(classEl);
        } 
        if (classEl === 'calculator__btn--fraction') {
            addFraction();
        }
        if (classEl === 'calculator__btn--plus') {
            addSymbol('+');
        }
        if (classEl === 'calculator__btn--minus') {
            addSymbol('-');
        }
        if (classEl === 'calculator__btn--multiply') {
            addSymbol('*');
        }
        if (classEl === 'calculator__btn--divide') {
            addSymbol('/');
        }
        if (classEl === 'calculator__btn--modulus') {
            addSymbol('%');
        }
        if (classEl === 'calculator__btn--ce') {
            operations = ["0"];
        }
        res = operations.join(" ");
        element.textContent = res;
        if (classEl === 'calculator__btn--equal') {
            evaluateEquation('+');
        }
    }
});