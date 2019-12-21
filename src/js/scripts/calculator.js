//Created by Yury Volkovskiy

const data = {
  BUTTON_CLASS: 'calculator__btn',
  BUTTON_FRACTION: 'calculator__btn--fraction',
  BUTTON_PLUS: 'calculator__btn--plus',
  BUTTON_MINUS: 'calculator__btn--minus',
  BUTTON_MULTIPLY: 'calculator__btn--multiply',
  BUTTON_DIVIDE: 'calculator__btn--divide',
  BUTTON_MODULUS: 'calculator__btn--modulus',
  BUTTON_SQUARE: 'calculator__btn--sqr',
  BUTTON_SQUARE_ROOT: 'calculator__btn--square',
  BUTTON_C: 'calculator__btn--c',
  BUTTON_CE: 'calculator__btn--ce',
  BUTTON_NEGATE: 'calculator__btn--plusminus',
  BUTTON_PARTIAL: 'calculator__btn--partial',
  BUTTON_DELETE_SYMBOL: 'calculator__btn--delete',
  BUTTON_EQUAL: 'calculator__btn--equal',
  RESULT: 'calculator__result'
};

let operations = ["0"];
let res = "0";
let curNum = 0;
let element = document.querySelector(`.${data.RESULT}`);

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
  if (e.target.classList[0] === data.BUTTON_CLASS) {
    const classEl = e.target.classList[1];
    if (!isNaN(classEl[classEl.length - 1])) {
      renderNum(classEl);
    }
    if (classEl === data.BUTTON_FRACTION) {
      addFraction();
    }
    if (classEl === data.BUTTON_PLUS) {
      addSymbol('+');
    }
    if (classEl === data.BUTTON_MINUS) {
      addSymbol('-');
    }
    if (classEl === data.BUTTON_MULTIPLY) {
      addSymbol('*');
    }
    if (classEl === data.BUTTON_DIVIDE) {
      addSymbol('/');
    }
    if (classEl === data.BUTTON_MODULUS) {
      addSymbol('%');
    }
    if (classEl === data.BUTTON_NEGATE) {
      changePosNeg();
    }
    if (classEl === data.BUTTON_SQUARE_ROOT) {
      addPrefix('Math.sqrt');
    }
    if (classEl === data.BUTTON_SQUARE) {
      addPrefix('Math.pow', ",2");
    }
    if (classEl === data.BUTTON_PARTIAL) {
      addPrefix('1 / ');
    }
    if (classEl === data.BUTTON_DELETE_SYMBOL) {
      removeSymbol();
    }
    if (classEl === data.BUTTON_C) {
      curNum = 0;
      operations = ["0"];
    }
    if (classEl === data.BUTTON_CE) {
      operations[curNum] = "0";
    }
    res = operations.join(" ");
    if (classEl === data.BUTTON_EQUAL) {
      res = evaluateEquation();
    }
    element.textContent = formatNumber();
  }


});
