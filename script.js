particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": false,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#fff"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.7,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 20,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 50,
            "color": "#ffffff",
            "opacity": 0.6,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "bottom",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 300,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
    },
    "retina_detect": false
});


function newYearCountDown() {

    const chimes = document.querySelector('#chimes');
    const audioTwo = document.querySelector('#myAudioTwo');
    audioTwo.pause()
    
    const newYearDate = new Date ("January 1, 2024, 00:00")
    const now = new Date();
    const diff = newYearDate - now;

    const msInSecond = 1000;
    const msInMinute = 1000 * 60;
    const msInHour = 1000 * 60 * 60;
    const msInDay = 1000 * 60 * 60 * 24;

    const displayDay = Math.floor(diff / msInDay);
    const dayInRussia = function dec10Num(number,titles) {
      cases = [2,0,1,1,1,2]
      return titles [(number%100>4&&number%100<20)?2:cases[(number%10<5)?number%10:5]]
    }
    const dayInRussiaDisplay = dayInRussia(displayDay, ['день','дня','дней'])
    document.querySelector('.days').innerHTML = `${displayDay} <br> ${dayInRussiaDisplay}`

    const displayHour = Math.floor(diff%msInDay / msInHour);
    const hourInRussia = function dec10Num(number,titles) {
      cases = [2,0,1,1,1,2]
      return titles [(number%100>4&&number%100<20)?2:cases[(number%10<5)?number%10:5]]
    }
    const hourInRussiaDisplay = hourInRussia(displayHour, ['час','часа','часов'])
    document.querySelector('.hours').innerHTML = `${displayHour} <br> ${hourInRussiaDisplay}`

    const displayMinute = Math.floor(diff%msInHour / msInMinute);
    const minuteInRussia = function dec10Num(number,titles) {
      cases = [2,0,1,1,1,2]
      return titles [(number%100>4&&number%100<20)?2:cases[(number%10<5)?number%10:5]]
    }
    const minuteInRussiaDisplay = minuteInRussia(displayMinute, ['минута','минуты','минут'])
    document.querySelector('.minutes').innerHTML = `${displayMinute} <br> ${minuteInRussiaDisplay}`

    const displaySecond = Math.floor(diff%msInMinute / msInSecond);
    const secondInRussia = function dec10Num(number,titles) {
      cases = [2,0,1,1,1,2]
      return titles [(number%100>4&&number%100<20)?2:cases[(number%10<5)?number%10:5]]
    }
    const secondInRussiaDisplay = secondInRussia(displaySecond, ['секунда','секунды','секунд'])
    document.querySelector('.seconds').innerHTML = `${displaySecond} <br> ${secondInRussiaDisplay}`


    if(diff <= 0) {
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        clearInterval(timeID)
        happyNewYear()
    }

    if(diff <= 61000 ) {
      chimes.play();
      audio.pause();
    }

}
let timeID = setInterval(newYearCountDown,1000)

const button = document.querySelector('#myButton');
const audio = document.querySelector('#myAudio');
button.addEventListener('click', function() {
    if(audio.paused) {audio.play()}
    else {audio.pause()}
})

function happyNewYear() {
  document.querySelector('#myAudioTwo').play()

  const particles = document.querySelector('#particles-js');
  particles.style = 'display:none';
  const heading = document.querySelector('h1');
  heading.textContent = 'С НОВЫМ ГОДОМ!!!';
  heading.classList.add('red');
  const body = document.querySelector('body');
  body.classList.add('newBody');
  const block = document.querySelectorAll('.newYear');
  block.forEach(item => {
    item.classList.add('newBlock')
  })
  const content = document.querySelector('.content');
  content.classList.add('newContent');

  button.style = 'display:none'
  buttonTwo.style = 'display:block'
}

const buttonTwo = document.querySelector('#myButtonTwo');
  const audioTwo = document.querySelector('#myAudioTwo');
  buttonTwo.addEventListener('click', function() {
    audioTwo.pause()
})

gsap.from('a', {y:-100, duration:1, delay:1.5, stagger:.5})
gsap.fromTo('.block', {opacity:0, scale:0},{duration:2, delay:.3, opacity:1, scale:1})
gsap.from('.classBtn', {opacity:0, rotation: 360, delay:3.5, duration:1})
gsap.from('.classBtnTwo', {opacity:0, rotation: 360, delay:3.5, duration:1})




