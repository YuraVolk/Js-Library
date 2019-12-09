let operations = ["0"];
let res = "0";
let curNum = 0;
let element = document.querySelector('.calculator__result');

const formatNumber = function () {
  if (res) {
    let str = res.toString().replace(/Math.sqrt/g, "\u221A");
    str = str.replace(/,2/g, "\u00B2");
    str = str.replace(/Math.pow/g, "");
    str = str.replace(/\//g, "\u00F7");
    str = str.replace(/\*/g, "\u00D7");
    str = str.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    return str;
  }
}

function renderNum(classEl) {
  if (operations[curNum] === "0") {
    operations[curNum] = "";
  }
  if (operations[curNum - 1]) {
    if (!(classEl[classEl.length - 1] === "0" && operations[curNum - 1] === '/') && (operations[curNum - 1] !== ')')) {
      operations[curNum] += classEl[classEl.length - 1];
    }
  } else {
    operations[curNum] += classEl[classEl.length - 1];
  }
}

function addFraction() {
  if (!(operations[curNum].indexOf('.') > -1)) {
    operations[curNum] += '.';
  }
}

function changePosNeg() {
  if (operations[curNum].indexOf('-') > -1) {
    operations[curNum] = (Math.abs(operations[curNum])).toString();
  } else {
    operations[curNum] = (-Math.abs(operations[curNum])).toString();
  }
}

function insertSymbol(symbol) {
  curNum++;
  operations[curNum] = symbol;
  curNum++;
  operations[curNum] = "";
}

function addSymbol(symbol) {
  if (operations.length > 1) {
    if (!isNaN(operations[operations.length - 1]) && operations[operations.length - 1].length !== 0) {
      insertSymbol(symbol);
    } else if (operations[curNum - 1] === ')') {
      insertSymbol(symbol);
    }
  } else {
    insertSymbol(symbol);
  }
}

function evaluateEquation() {
  if (operations.length > 1) {
    let result;
    if (!(typeof operations[operations.length - 2] === 'number') && (operations[operations.length - 1].length === 0)) {
      if (!(operations[operations.length - 2].indexOf(')') > -1)) {
        operations.splice(-2, 1);
      }
    }
    if (operations[operations.length - 1].length === 0) {
      operations.pop();
    }
    curNum = 0;
    result = eval(operations.join(" "));
    operations.length = 0;
    operations = [result + ""];
    return result;
  }
}

function removeSymbol() {
  if (operations[curNum].length > 0) {
    operations[curNum] = operations[curNum].slice(0, -1);
    if (operations[curNum] === "") {
      operations[curNum] = "0";
    }
  }
}

function insertPrefix(symbols, prefix, endPrefix) {
  if (symbols.includes(operations[curNum - 1]) && operations[curNum].length === 0) {
    operations.splice(-2, 1);
  }
  operations.splice(operations[curNum - 1], 0, prefix + "(");
  operations.push(endPrefix + ")");
  if (!(operations[operations.length - 1] === "")) {
    operations.push("");
  }
  curNum = operations.length - 1;
}

function addPrefix(prefix, endPrefix = "") {
  const symbols = ['+', '-', '*', '%', '/'];
  if (prefix !== '1 / ') {
    insertPrefix(symbols, prefix, endPrefix);
  } else {
    if (operations[curNum] !== "0" && evaluateEquation() !== 0) {
      insertPrefix(symbols, prefix, endPrefix);
    }
  }
}

document.addEventListener('click', (e) => {
  if (e.target.classList[0] === 'calculator__btn') {
    const classEl = e.target.classList[1];
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
    if (classEl === 'calculator__btn--plusminus') {
      changePosNeg();
    }
    if (classEl === 'calculator__btn--square') {
      addPrefix('Math.sqrt');
    }
    if (classEl === 'calculator__btn--sqr') {
      addPrefix('Math.pow', ",2");
    }
    if (classEl === 'calculator__btn--partial') {
      addPrefix('1 / ');
    }
    if (classEl === 'calculator__btn--delete') {
      removeSymbol();
    }
    if (classEl === 'calculator__btn--c') {
      curNum = 0;
      operations = ["0"];
    }
    if (classEl === 'calculator__btn--ce') {
      operations[curNum] = "0";
    }
    res = operations.join(" ");
    if (classEl === 'calculator__btn--equal') {
      res = evaluateEquation();
    }
    element.textContent = formatNumber();
  }
});
