function large(){
    document.querySelector(".chng").classList.add("chnglarg");
    document.querySelector(".chng").classList.remove("chngSmall");
}
document.querySelector(".larg").onclick = large;
function small(){
    document.querySelector(".chng").classList.add("chngSmall");
    document.querySelector(".chng").classList.remove("chnglarg");
}
document.querySelector(".small").onclick = small;