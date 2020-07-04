const daysContainer = document.querySelector('#days')
const hoursContainer = document.querySelector('#hours')
const minutesContainer = document.querySelector('#minutes')
const secondsContainer = document.querySelector('#seconds')
const dateContainer = document.querySelector('.date')
const spinner = document.querySelector('#loading')
const countdownContainer = document.querySelector('#countdown')

const newYear = new Date(`december 25 2021 19:30:00`)

dateContainer.innerHTML = `25/12/2021 <br> 19:30`

const updateCountdown = () => {
    const currenteTime = new Date()
    const difference = newYear - currenteTime // return in miliseconds
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60

    daysContainer.innerHTML = days < 10 ? '0' + days : days
    hoursContainer.innerHTML = hours < 10 ? '0' + hours : hours
    minutesContainer.innerHTML = minutes < 10 ? '0' + minutes : minutes
    secondsContainer.innerHTML = seconds < 10 ? '0' + seconds : seconds

}

setTimeout( () => {
    spinner.remove()
    countdownContainer.style.display = 'flex'

}, 1000 )

setInterval(updateCountdown, 1000);

const changeBackGround =() => {
    const images = ['bg__0.jpg', 'bg__1.jpg', 'bg__2.jpg', 'bg__3.jpg','bg__4.jpg']
    const indice = images[Math.floor( Math.random() * images.length)]

    document.body.style.backgroundImage = `url('images/${indice}')`;

    console.log(indice);
    
} 

window.addEventListener('load', changeBackGround)