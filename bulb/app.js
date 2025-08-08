const bulb = document.querySelector('.bulb-on')
const button = document.querySelector('#btn')

button.addEventListener("click", on)

function on(){
    bulb.classList.remove("hide")
}