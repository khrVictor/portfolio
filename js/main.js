
/* анимация при скроле в html добавляем клас 'аним айтем' в CSS клас 'актив' */

let animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params){
        for (let index = 0; index < animItems.length; index++){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;
            
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight) {
                animItemPoint - window.innerHeight - window.innerHeight / animStart;
            }

            if((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                animItem.classList.remove('_active');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
animOnScroll(); 

}

/* cчетчик скилов */


let number = document.getElementById ('number');
let counter = 23;
setInterval (() => {
    if (counter == 92){
        clearInterval();
    }
    else{
        counter += 1;
        number.innerHTML = counter + '%';   
    }
},40);

let numbercss = document.getElementById ('numbercss');
let countercss = 10;
setInterval (() => {
    if (countercss == 86){
        clearInterval();
    }
    else{
        countercss += 1;
        numbercss.innerHTML = countercss + '%';   
    }
},36);

let numberjs = document.getElementById ('numberjs');
let counterjs = 3;
setInterval (() => {
    if (counterjs == 73){
        clearInterval();
    }
    else{
        counterjs += 1;
        numberjs.innerHTML = counterjs + '%';   
    }
},30);

let numberjq = document.getElementById ('numberjq');
let counterjq = 3;
setInterval (() => {
    if (counterjq == 70){
        clearInterval();
    }
    else{
        counterjq += 1;
        numberjq.innerHTML = counterjq + '%';   
    }
},30);











/* модальные окна*/

let modal = document.getElementById('myModal');
let btn = document.getElementById('myBtn');
let span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
    modal.style.display = "block";
}
span.onclick = function(){
    modal.style.display = "none";
}
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}

let modalC = document.getElementById('myModal_center');
let btnC = document.getElementById('myBtn_center');
let spanc = document.getElementsByClassName("close_centr")[0];

btnC.onclick = function(){
    modalC.style.display = "block";
}
spanc.onclick = function(){
    modalC.style.display = "none";
}
window.onclick = function(event){
    if(event.target == modalC){
        modalC.style.display = "none";
    }
}

let modalr = document.getElementById('myModal_right');
let btnr = document.getElementById('myBtn_right');
let spanr = document.getElementsByClassName("close_right")[0];

btnr.onclick = function(){
    modalr.style.display = "block";
}
spanr.onclick = function(){
    modalC.style.display = "none";
}
window.onclick = function(event){
    if(event.target == modalr){
        modalr.style.display = "none";
    }
}


