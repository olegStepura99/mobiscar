const calculate = function() {
    const popup = document.querySelector(".popup");
    const btnOpen = document.querySelector(".promo button");
    const btnClose = popup.querySelector(".close");
    
    const calcWrapper = popup.querySelector(".calc");
    const result = popup.querySelector(".result")

    btnOpen.addEventListener("click", () => popup.classList.add("open"));
    btnClose.addEventListener("click", () => popup.classList.remove("open"));


    calcWrapper.addEventListener("click", (event) =>{
        if(!event.target.classList.contains("btn")) return;

        const value = event.target.innerHTML

        if(value == "="){
            console.log(result.value)
            result.value = eval(result.value);
        }else if(value == "C"){
            result.value  = "";
        }else{
            result.value += value;
        }

    })
}()