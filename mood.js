gsap.fromTo('.one', {opacity:0, scale:0},{duration:2, delay:.3, opacity:1, scale:1})
gsap.from ('.two', {y:-400, duration:2, delay:2 })
gsap.to('.movie', {opacity:1, duration:3, delay:4.5})
//gsap.from ('#search', {y:-300, duration:2, delay:.9, ease: "elastic" })

let nameTreck = document.querySelector('#nameTreck')

let audio = document.getElementById("audio");    // Берём элемент audio
let time = document.querySelector(".time");      // Берём аудио дорожку
let btnPlay = document.querySelector(".play");   // Берём кнопку проигрывания
let btnPause = document.querySelector(".pause"); // Берём кнопку паузы
let btnPrev = document.querySelector(".prev");   // Берём кнопку переключения предыдущего трека
let btnNext = document.querySelector(".next");   // Берём кнопку переключение следующего трека

let playlist = ['treck1.mp3','treck2.mp3','treck3.mp3','treck4.mp3','treck5.mp3','treck6.mp3','treck7.mp3','treck8.mp3','treck9.mp3','treck10.mp3','treck11.mp3','treck12.mp3','treck13.mp3','treck14.mp3','treck15.mp3','treck16.mp3','treck17.mp3','treck18.mp3','treck19.mp3','treck20.mp3','treck21.mp3','treck22.mp3','treck23.mp3','treck24.mp3'];

let treck;

// Событие перед загрузкой страницы
window.onload = function() {
    treck = 0; // Присваиваем переменной ноль
}

function switchTreck(numTreck) {
    audio.src = './audio/' + playlist[numTreck];
    audio.currentTime = 0;
    audio.play();
    //const displayTreck = playlist[numTreck];
    nameTreck.innerHTML = 'Трек' + ' ' + [numTreck +1];
}

btnPlay.addEventListener("click", function() {
    audio.play(); // Запуск песни
    // Запуск интервала 
    audioPlay = setInterval(function() {
        // Получаем значение на какой секунде песня
        let audioTime = Math.round(audio.currentTime);
        // Получаем всё время песни
        let audioLength = Math.round(audio.duration)
        // Назначаем ширину элементу time
        time.style.width = (audioTime * 100) / audioLength + '%';
        // Сравниваем, на какой секунде сейчас трек и всего сколько времени длится
        // И проверяем что переменная treck меньше четырёх
        if (audioTime == audioLength && treck < 23) {
            treck++; // То Увеличиваем переменную 
            switchTreck(treck); // Меняем трек
        // Иначе проверяем тоже самое, но переменная treck больше или равна четырём
        } else if (audioTime == audioLength && treck >= 23) {
            treck = 0; // То присваиваем treck ноль
            switchTreck(treck); //Меняем трек
        }
    }, 10)
});

btnPause.addEventListener("click", function() {
    audio.pause(); // Останавливает песню
    clearInterval(audioPlay) // Останавливает интервал
});

btnPrev.addEventListener("click", function() {
    // Проверяем что переменная treck больше нуля
    if (treck > 0) {
        treck--; // Если верно, то уменьшаем переменную на один
        switchTreck(treck); // Меняем песню.
    } else { // Иначе
        treck = 23; // Присваиваем три
        switchTreck(treck); // Меняем песню
    }
});

btnNext.addEventListener("click", function() {
    // Проверяем что переменная treck больше трёх
    if (treck < 23) { // Если да, то
        treck++; // Увеличиваем её на один
        switchTreck(treck); // Меняем песню 
    } else { // Иначе
        treck = 0; // Присваиваем ей ноль
        switchTreck(treck); // Меняем песню
    }
});

const searchInput = document.querySelector('#search');
const divs = document.querySelectorAll('.movie');

searchInput.addEventListener('keyup', function(event) {
const word = event.target.value.toLowerCase();

divs.forEach(item => {
    item.querySelector('p').textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none");
})
})

const buttonMain = document.querySelector('#btnThree');

buttonMain.addEventListener('click', () => {
    document.location.assign('index.html')
})