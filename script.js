


let audio =  new Audio(` Audio/Kalimba.mp3`)


let playBtn = document.querySelector(`#play`)
let pauseBtn = document.querySelector(`#pause`)

let playTheMusic = function(){
    audio.play()
}
let pauseTheMusic = function(){
    audio.pause()
}
let forwardTheMusic = function(){
    audio.forward()
}

playBtn.addEventListener(`click`, playTheMusic)
pauseBtn.addEventListener(`click`,pauseTheMusic)









