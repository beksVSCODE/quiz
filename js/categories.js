// const nav = document.querySelector('.header_ul');
// const menuBtn = document.querySelector('.header-bmenu');
let football_btn = document.querySelector('.football')
let guessCountry_btn = document.querySelector('.guessCountry')
let IT_btn = document.querySelector('.IT')
let anime_btn = document.querySelector('.anime')
let truefalse_btn = document.querySelector('.truefalse')
let game_btn = document.querySelector('.game')
let cinema_btn = document.querySelector('.cinema')
let car_btn = document.querySelector('.car')

let picture = document.querySelector('.quiz-types-img')

let btnNextPages = document.querySelector('.quiz-types-img-btn')




function football(){
    picture.style.backgroundImage = `url('../media/categories-media/Soccer.png')`

   btnNextPages.setAttribute('onclick', "window.location.href = '../pages/fotball.html'")
}


function car(){
    picture.style.backgroundImage = `url('../media/categories-media/car.bckg.svg')`

   btnNextPages.setAttribute('onclick', "window.location.href = '../pages/car.html'")
}


function IT(){
    picture.style.backgroundImage = `url('../media/categories-media/IT.png')`

   btnNextPages.setAttribute('onclick', "window.location.href = '../pages/IT.html'")
}


function anime(){
    picture.style.backgroundImage = `url('../media/categories-media/animes.jpg')`

   btnNextPages.setAttribute('onclick', "window.location.href = '../pages/anime.html'")
}

function truefalse(){
    picture.style.backgroundImage = `url('../media/categories-media/TRUEFALSE.jpg')`

   btnNextPages.setAttribute('onclick', "window.location.href = '../pages/trueFalse.html'")
}

function game(){
    picture.style.backgroundImage = `url('../media/categories-media/games.png')`

   btnNextPages.setAttribute('onclick', "window.location.href = '../pages/game.html'")
}

function cinema(){
    picture.style.backgroundImage = `url('../media/categories-media/cinema.bkg.svg')`

   btnNextPages.setAttribute('onclick', "window.location.href = '../pages/cinema.html'")
}

function codify(){
    picture.style.backgroundImage = `url('../media/categories-media/Без названия.png')`

   btnNextPages.setAttribute('onclick', "window.location.href = '../pages/coidfy.html'")
}

const mediaQuery = window.matchMedia('(max-width: 600px)')
if (mediaQuery.matches){
    football_btn.setAttribute('onclick', "window.location.href = '../pages/fotball.html'")
    car_btn.setAttribute('onclick', "window.location.href = '../pages/car.html'")
    IT_btn.setAttribute('onclick', "window.location.href = '../pages/IT.html'")
    anime_btn.setAttribute('onclick', "window.location.href = '../pages/anime.html'")
    truefalse_btn.setAttribute('onclick', "window.location.href = '../pages/trueFalse.html'")
    game_btn.setAttribute('onclick', "window.location.href = '../pages/game.html'")
    cinema_btn.setAttribute('onclick', "window.location.href = '../pages/cinema.html'")
}