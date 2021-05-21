// eslint-disable-next-line strict
'use strict';

const bin2Dec = () => {
  const form = document.getElementById('myform'),
    text = document.getElementById('text'),
    result = document.getElementById('result');


  form.addEventListener('submit', e => {
    e.preventDefault();
    result.innerHTML = '';
    try {
      const arr = text.value.split(', '),
        resultObj = {};

      arr.forEach(element => {
        if (/^[0-1]{1,8}$/g.test(element.trim())) {
          resultObj[element] = parseInt(element, 2);
        } else {
          resultObj[element] = 'Введено неправильное значение бинарного числа';
        }
      });

      for (const key in resultObj) {
        const p = document.createElement('p');
        p.innerText = `${key}: ${resultObj[key]}`;
        result.insertAdjacentElement('beforeend', p);
      }
    } catch (error) {
      console.log(error);
      result.textContent = 'Что-то пошло не так...';
    }
  });
};

bin2Dec();
