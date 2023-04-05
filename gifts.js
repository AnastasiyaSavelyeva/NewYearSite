gsap.fromTo('.header', {opacity:0, scale:0},{duration:2, delay:.3, opacity:1, scale:1})

const items = document.querySelectorAll('.item')

items.forEach(item => {
    item.addEventListener('mouseover', ()=> {
    removeFocus()
    item.classList.add('selected')
    })
    
    removeFocus = ()=> {
    items.forEach(item => {
    item.classList.remove('selected')
    })    
    }
})

const buttonMain = document.querySelector('#btnThree');

buttonMain.addEventListener('click', () => {
    document.location.assign('index.html')
})