const themechanger = document.getElementById("themechanger");
const body = document.body;
const board = document.getElementById("board");
const p = document.querySelectorAll("p");
const noticia = document.querySelectorAll(".noticia")

const lowboard = document.getElementById("lowboard");
const noticiamenor = document.querySelectorAll(".noticiamenor");
let isDarkMode = false;

themechanger.addEventListener("click", function () {

    isDarkMode = !isDarkMode;

    if (isDarkMode == true) {

        themechanger.src = "assets/darkmode.webp";
        body.style.backgroundColor = "rgb(26, 26, 26)";
        board.style.backgroundColor = "rgb(48, 48, 48)";

        lowboard.style.backgroundColor = "rgb(48, 48, 48)";
   
        noticiamenor.forEach(function(noticiamenor){

            noticiamenor.style.backgroundColor = "rgb(26, 26, 26)";
        })

        p.forEach(function(p){

            p.style.color = "rgb(255, 255, 255)";
        })

        noticia.forEach(function(noticia){

            noticia.style.backgroundColor = "rgb(26, 26, 26)";
        })
            
        
        

    } else {

        themechanger.src = "assets/lightmode.webp";
        body.style.backgroundColor = "white";
        board.style.backgroundColor = "rgb(224, 224, 224)";

        lowboard.style.backgroundColor = "rgb(224, 224, 224)";

        p.forEach(function(p){

            p.style.color = "black";
        })

        noticia.forEach(function(noticia){

            noticia.style.backgroundColor = "white";
        })
            
        noticiamenor.forEach(function(noticiamenor){

            noticiamenor.style.backgroundColor = "white";
        })
        
    }
})



