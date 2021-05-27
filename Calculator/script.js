// eslint-disable-next-line strict
'use strict';

const calculator = () => {
  const wrap = document.querySelector('.wrap'),
    output = wrap.querySelector('.output');

  let result = 0,
    memoryDigit = '',
    memoryDigitFirst = '',
    memoryOperator = '',
    flag = false,
    disable = false;

  const funcs = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };

  const addDigit = digit => {
    output.insertAdjacentText('beforeend', digit);
  };

  const operation = (operator, name) => {
    console.log(operator, name);
    if (!result) {
      result = funcs[memoryOperator](+memoryDigitFirst, +memoryDigit);
      console.log(result);
      output.textContent = result;
      memoryOperator = operator;
    } else {
      result = funcs[memoryOperator](+result, +memoryDigit);
      output.textContent = result;
      memoryOperator = operator;
    }
  };

  wrap.addEventListener('click', e => {
    output.textContent = output.textContent.trim();
    const target = e.target;

    if (target.id === 'reset') {
      disable = false;
      output.textContent = 0;
      memoryDigit = '';
      memoryOperator = '';
      output.textContent = 0;
      result = 0;
      flag = false;
    }
    if (output.textContent.length > 8) {
      output.textContent = 'ERROR';
      disable = true;
    } else {
      if (!disable) {
        if (target.closest('.digit')) {

          if (output.textContent === '0' || flag) {

            output.textContent = '';
            flag = false;
            // memoryDigitFirst = memoryDigit;
            // console.log('memoryDigitFirst: ', memoryDigitFirst);
          }
          if (output.textContent.length < 8) {
            addDigit(target.textContent);
            memoryDigitFirst = memoryDigit;
            console.log('memoryDigitFirst: ', memoryDigitFirst);
            memoryDigit = output.textContent;
            console.log('memoryDigit: ', memoryDigit);

          }
        }

        if (target.closest('.plus-minus')) {
          
        }

        if (target.closest('.AC')) {
          memoryDigit = '';
          memoryOperator = '';
          memoryDigitFirst = '';
          output.textContent = 0;
          result = 0;
          flag = false;
        }

        if (target.closest('.C')) {
          output.textContent = 0;

        }

        if (target.closest('.operator')) {
          if (output.textContent !== '0') {
            flag = true;
            //memoryOperator = target.id;
            if (memoryOperator) {
              operation(target.id, target.name);
            } else {
              memoryOperator = target.id;
              console.log('memoryOperator: ', memoryOperator);
            }
          }
        }

        if (target.closest('.equally')) {
          if (!result) {
            result = funcs[memoryOperator](+memoryDigitFirst, +memoryDigit);
            console.log(result);
            output.textContent = result;
          } else {
            result = funcs[memoryOperator](+result, +memoryDigit);
            console.log(result);
            output.textContent = result;
          }

        }
      }
    }
  });
};

calculator();
