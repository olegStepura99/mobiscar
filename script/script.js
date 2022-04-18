"use strict";

const showHideMenu = function () {
    const showBtn = document.querySelector(".burger-open");
    const closeBtn = document.querySelector(".burger-close");
    const menu = document.querySelector("nav");
    
    showBtn.addEventListener("click", () => {
        menu.classList.add("mobile");
    })
    closeBtn.addEventListener("click", () => {
        menu.classList.remove("mobile");
    });
}();

const showVideo = function () {
    const btn = document.querySelector(".screensaver-btn");
    const window = document.querySelector(".screensaver");

    btn.addEventListener("click", () => {
        window.classList.add("video-show");
        window.innerHTML = `
            <iframe  src="https://www.youtube.com/embed/AlkZ-hiKKjE?autoplay=1&amp;loop=1&amp;&amp;mute=1;" title="YouTube video player" frameborder="0" " allowfullscreen></iframe>
        `;
    });  
}();


const slider = function (){
    const list = document.querySelector(".slider .list");
    const slide = list.querySelector(".slide")
    const btnPrev = document.querySelector('.arr.prev');
    const btnNext = document.querySelector('.arr.next');

    let activeSlide = 1;

    const prevNext = function(event) {
        if(event.target.classList.contains('disabled')) return;

        const dir = event.target.classList.contains('prev') ? 'prev' : 'next';
        const width = list.offsetWidth;
            
        let x = list.style.transform || '0';
        x = x.replace('translateX(', '');
        x = x.replace(')', '');
        x = Math.abs(parseInt(x));

        if(dir == "next"){
            x += slide.offsetWidth + (list.offsetWidth - 3* (slide.offsetWidth))/4;
            activeSlide++;
        }else if(dir == "prev"){
            x -= slide.offsetWidth + (list.offsetWidth - 3* (slide.offsetWidth))/4;
            activeSlide--;
        }

        list.style.transform = `translateX(-${x}px)`;

        (activeSlide == 1) ?  btnPrev.classList.add("disabled") : btnPrev.classList.remove("disabled");
        (activeSlide == 3) ?  btnNext.classList.add("disabled") : btnNext.classList.remove("disabled");
        
        
    }
    
    btnPrev.addEventListener('click', (event) => prevNext(event));
    btnNext.addEventListener('click', (event) => prevNext(event));
}();
