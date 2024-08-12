// function pintar(){
//     ele.style.backgroundColor = 'yellow'
//     }
//     const ele = document.getElementById("ele1")
//     ele.addEventListener("click", pintar);


function pintar(event, color = 'green') {
    console.log("Elemento clickeado:", event.target);
    event.target.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", function(event) {
    pintar(event, 'yellow');
});