let type = document.querySelector(".type")
let back = document.querySelector(".back")
let typetext = type.innerHTML
let typedArr = typetext.split("")
let typing = 0;
type.innerHTML = "";



function typedJs(){
    if(typing < typetext.length){
        type.innerHTML += typetext.charAt(typing)
        typing++
        typedArr = typetext.split("")
    }else{
        typedArr.pop("");
        type.innerHTML =typedArr.join("");
        if(typedArr.length == 0){
            typing = 0;
        }
    }
}
setInterval(()=>{
    typedJs()
} ,500)

let scrollToTopp = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}

back.addEventListener("click", () => {
    scrollToTopp()
    
})

window.addEventListener("scroll", () => {
    let scrolling = window.scrollY
    if(scrolling > 100){
        back.style.display = "block"
    }else{
          back.style.display = "none"
    }
})