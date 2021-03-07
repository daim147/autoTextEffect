const textEl = document.getElementById("text")
const speedEl = document.getElementById("speed")
const typeEffect = prompt("Write lines to make effect", "We love Programming")
const text = typeEffect
let idx = 1
let speedText = 300/speedEl.value
 writeText()

 function writeText(){
     textEl.innerText = text.slice(0,idx)
     idx++
     if(idx > text.length){
         idx = 1
     }
     setTimeout(writeText, speedText)
 }

 speedEl.addEventListener("input",(e)=>{

    speedText = 300 / e.target.value
 })