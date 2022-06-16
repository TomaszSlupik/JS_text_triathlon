const imgCircle = document.querySelector('.imgCircle ')
const cardNextAnimation = document.querySelector('.cardNextAnimation')
const cardNextAnimationBlack = document.querySelector('.cardNextAnimationBlack')
const cardNext = document.querySelector('.cardNext')
const imgCircletop = document.querySelector('.imgCircletop')

const showText = () => {
    cardNextAnimation.classList.toggle('cardNextAnimationBlack')
    imgCircle.classList.toggle('imgCircletop')
}

cardNext.addEventListener('click', showText)




