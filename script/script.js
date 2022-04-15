const showHideMenu = function () {
    const showBtn = document.querySelector(".burger_open");
    const closeBtn = document.querySelector(".burger_close");
    const menu = document.querySelector(".nav");
    
    showBtn.addEventListener("click", () => {
        menu.classList.add("mobile");
    })
    closeBtn.addEventListener("click", () => {
        menu.classList.remove("mobile");
    })
}()

const showVideo = function () {
    const btn = document.querySelector(".screensaver_btn");
    const window = document.querySelector(".screensaver");

    btn.addEventListener("click", () => {
        window.classList.add("video_show");
        window.innerHTML = `
            <iframe  src="https://www.youtube.com/embed/AlkZ-hiKKjE?autoplay=1&amp;loop=1&amp;&amp;mute=1;" title="YouTube video player" frameborder="0" " allowfullscreen></iframe>
        `;
    })  

}()