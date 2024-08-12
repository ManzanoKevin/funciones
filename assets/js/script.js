// function pintar(){
//     ele.style.backgroundColor = 'yellow'
//     }
//     const ele = document.getElementById("ele1")
//     ele.addEventListener("click", pintar);


const ele = document.getElementById("ele1");
ele.style.backgroundColor = 'green';

function pintar(event, color = 'green') {
    event.target.style.backgroundColor = color;
}

ele.addEventListener("click", function(event) {
    pintar(event, 'yellow');
});