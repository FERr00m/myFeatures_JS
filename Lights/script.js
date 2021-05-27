// eslint-disable-next-line strict
'use strict';


const lights = () => {
  const backgroundImg = document.querySelector('.background-img'),
    num = document.querySelector('.num'),
    lights = document.querySelectorAll('.light');

  const randomNum = numMax => (Math.random() * numMax + 1 | 0);

  const randomLights = () => {
    lights.forEach(light => {
      const x = randomNum(255),
        y = randomNum(255),
        z = randomNum(255);
      light.style = `
      background-color: rgba(${x}, ${y}, ${z}, ${Math.random()});
      box-shadow: 0 0 30px rgb(${x}, ${y}, ${z})`;
    });
  };

  let flag = false,
    intensity = 0.5;

  const showNum = number => num.innerText = number + 'ms';

  const obj = {
    name: 'interval',
    start(interval) {
      this.name = setInterval(randomLights, interval * 500);
      showNum(interval * 500);
    },
    stop() {
      clearInterval(this.name);
    }
  };



  backgroundImg.addEventListener('click', e => {
    if (e.target.matches('#start')) {
      if (!flag) {
        flag = true;
        obj.start(intensity);
      }

    }

    if (e.target.matches('#stop')) {
      flag = false;
      obj.stop();
    }

    if (e.target.matches('#minus')) {
      if (intensity > 1) {
        intensity--;
        obj.stop();
        obj.start(intensity);

      }
    }

    if (e.target.matches('#plus')) {
      if (intensity < 5) {
        intensity++;
        obj.stop();
        obj.start(intensity);
      }
    }
  });

};

lights();
