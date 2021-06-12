const arrow =document.querySelector('.arrow')
const person = document.querySelector('.person')
const darkArrow = document.querySelector('.dark-arrow')
const footer = document.querySelector('.footer')
const social = document.querySelector('.social')
const nube = document.querySelector('.nube')
const darkArrow2 = document.querySelector('.dark-arrow-2')
const extra = document.querySelector('.extra')

arrow.addEventListener('click', ()=> {
    footer.classList.add('hidden')
    extra.classList.remove('hidden')
    social.classList.remove('hidden')
    nube.classList.remove('hidden')
})

darkArrow.addEventListener('click', () => {
    social.classList.add('hidden')
    footer.classList.remove('hidden')
    nube.classList.add('hidden')
    extra.classList.add('hidden')

})

darkArrow2.addEventListener('click', () => {
    nube.classList.add('hidden')
    footer.classList.remove('hidden')
    extra.classList.add('hidden')
    social.classList.add('hidden')



})