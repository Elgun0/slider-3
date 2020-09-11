const next=document.querySelector(".next")
const prev=document.querySelector(".prev")
const slider = document.getElementById("slider")
const sliderMiddle = document.querySelector(".slider-middle")
const sliderItem = document.querySelectorAll(".slider-item")
const firstClone = sliderItem[0].cloneNode(true)
const lastClone = sliderItem[sliderItem.length - 1].cloneNode(true)
sliderMiddle.appendChild(firstClone)
sliderMiddle.prepend(lastClone)
let sliderWidth = slider.offsetWidth * slider.querySelectorAll(".slider-item").length
sliderMiddle.style.width = sliderWidth + "px"

slider.querySelectorAll(".slider-item")[slider.querySelectorAll(".slider-item").length-1]
.setAttribute("id","lastClone")

slider.querySelectorAll(".slider-item")[0]
.setAttribute("id","firstCLone") 

var currentSlide = 1;

update();

function update() {
    sliderMiddle.style.transform = "translateX(" + -(currentSlide * slider.offsetWidth) + "px" + ")"
}

function Next(){
    currentSlide=(currentSlide+1+sliderItem.length)%sliderItem.length
    update()
}
function Prev(){
    currentSlide=(currentSlide-1+sliderItem.length)%sliderItem.length
    update()
}

next.addEventListener("click",Next)
prev.addEventListener("click",Prev)

document.querySelector(".sliderMiddle").addEventListener("transitionend",function(){})
 