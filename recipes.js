gsap.fromTo('.one', {opacity:0, scale:0},{duration:2, delay:.3, opacity:1, scale:1})
gsap.from('.dish', {opacity:0, delay:1, duration:3})
gsap.from('.tags', {y:-210, duration:2, delay:2, stagger:0.3})

const searchInput = document.querySelector('.input-field')
const divs = document.querySelectorAll('.dish')

searchInput.addEventListener('keyup', function(event){
    const word = event.target.value.toLowerCase()
    divs.forEach (item => {
        item.querySelector('h2').textContent.toLowerCase().includes(word)
        ||item.querySelector('ul').textContent.toLowerCase().includes(word)
        ?(item.style.display='block'):(item.style.display='none')
    })
})

const buttonMain = document.querySelector('#btnThree');

buttonMain.addEventListener('click', () => {
    document.location.assign('index.html')
})