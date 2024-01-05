let sliderContent = Array.from(document.querySelectorAll('.slider__view'))
let sliderDots = Array.from(document.querySelectorAll('.slider__dot'))
let newElementBtn = document.querySelector('.slider__btn')
const SLIDER_CONTENT = document.querySelector('.slider__content')
const SLIDER_MENU = document.querySelector('.slider__menu')
sliderDots.forEach(element => {
    element.addEventListener('click', function() {
        sliderSwitch(element)
    })
});
newElementBtn.addEventListener('click', function() {
    addNewSliderElement()
})
function sliderSwitch(element) {
    sliderContent.forEach(element => {
        element.classList.remove('active')
    })
    sliderContent[element.id.split('')[element.id.length - 1] - 1].classList.add('active')
}
function addNewSliderElement() {
    let contentName = prompt('Enter content of slide')
    let newElement = document.createElement('div')
    newElement.classList.add('slider__view')
    newElement.id = `slide-${sliderContent.length + 1}`
    newElement.innerText = contentName
    
    let newDot = document.createElement('div')
    let newSpan = document.createElement('span')
    newDot.classList.add('slider__dot')
    newDot.id = `dot-${sliderDots.length + 1}`
    newDot.appendChild(newSpan)

    SLIDER_CONTENT.appendChild(newElement)
    SLIDER_MENU.appendChild(newDot)

    sliderContent = Array.from(document.querySelectorAll('.slider__view'))
    sliderDots = Array.from(document.querySelectorAll('.slider__dot'))
    
    sliderDots.forEach(element => {
        element.addEventListener('click', function() {
            sliderSwitch(element)
        })
    });
}