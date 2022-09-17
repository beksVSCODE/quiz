let resultIT = localStorage.getItem('result_IT')
let resultAnime = localStorage.getItem('result_anime')
let resultCinema = localStorage.getItem('result_cinema')
let resultTrueFalse = localStorage.getItem('result_truefalse')
let resultfootball = localStorage.getItem('result_football')
let resultgame = localStorage.getItem('result_game')
let resultcar = localStorage.getItem('result_car')



let result = document.querySelector('.statistic__score')

let allStats = document.querySelectorAll(`.score`)
console.log(allStats);

let allPercentage = document.querySelectorAll(`.statistics-item__title`)
    
let all =  Math.floor((Number(resultAnime) + Number(resultCinema) + Number(resultIT ) + Number(resultTrueFalse) + Number(resultfootball) + Number(resultgame)+ Number(resultcar))/7)
result.innerHTML = `${all}0%`

window.addEventListener('load', function(){
    
    allStats[0].style.width = (resultfootball == null) ? '' : `${resultfootball}0%`
    allPercentage[0].textContent = (resultfootball == null) ? '0%' : `${resultfootball}0%`
    
    allStats[1].style.width = (resultcar == null) ? '' : `${resultcar}0%`
    allPercentage[1].textContent = (resultcar == null) ? '0%' : `${resultcar}0%`
    
    allStats[2].style.width = (resultIT == null) ? '' : `${resultIT}0%`
    allPercentage[2].textContent = (resultIT == null) ? '0%' : `${resultIT}0%`
    
    allStats[3].style.width = (resultAnime == null) ? '' : `${resultAnime}0%`
    allPercentage[3].textContent = (resultAnime == null) ? '0%' : `${resultAnime}0%`
    
    allStats[6].style.width = (resultCinema == null) ? '' : `${resultCinema}0%`
    allPercentage[6].textContent = (resultCinema == null) ? '0%' : `${resultCinema}0%`
    
    allStats[4].style.width = (resultTrueFalse == null) ? '' : `${resultTrueFalse}0%`
    allPercentage[4].textContent = (resultTrueFalse == null) ? '0%' : `${resultTrueFalse}0%`
    
    allStats[5].style.width = (resultgame == null) ? '' : `${resultgame}0%`
    allPercentage[5].textContent = (resultgame == null) ? '0%' : `${resultgame}0%`
    
    allStats[6].style.width = (resultCinema == null) ? '' : `${resultCinema}0%`
    allPercentage[6].textContent = (resultCinema == null) ? '0%' : `${resultCinema}0%`
    
})
