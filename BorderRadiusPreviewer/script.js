// eslint-disable-next-line strict
'use strict';

const borderRadiusPreviewer = () => {
  const property = document.getElementById('property'),
    btn = document.getElementById('btn'),
    block = document.getElementById('block'),
    leftTop = document.getElementById('left-top'),
    rightTop = document.getElementById('right-top'),
    leftBottom = document.getElementById('left-bottom'),
    rightBottom = document.getElementById('right-bottom');

  block.style = property.textContent;

  const foo = (lt, rt, rb, lb) => {
    leftTop.textContent = lt;
    rightTop.textContent = rt;
    rightBottom.textContent = rb;
    leftBottom.textContent = lb;
  };
  const editItem = elem => {
    elem.setAttribute('contenteditable', 'true');
    elem.focus();

    elem.onblur = () => {
      const arr = elem.textContent.split(': ')[1].split(' ');
      foo(...arr);
      elem.setAttribute('contenteditable', 'false');
      block.style = elem.textContent;
    };
  };

  document.body.addEventListener('click', e => {
    if (e.target.matches('#property')) {
      editItem(property);
    }

    if (e.target.matches('#btn')) {
      navigator.clipboard.writeText(property.textContent + ';')
        .then(() => {
          btn.classList.add('active');
        })
        .catch(err => {
          console.log('Something went wrong', err);
        });
    } else {
      btn.classList.remove('active');
    }

  });
};

borderRadiusPreviewer();
