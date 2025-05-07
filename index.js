let green = document.querySelector(".green");
let yellow = document.querySelector(".yellow");
let red = document.querySelector(".red");

function changeLight() {
    // green.style.background-color=green;
setInterval(() => {
    green.style.backgroundColor = "green";
    
    setTimeout(() => {
        green.style.backgroundColor = "gray";
        yellow.style.backgroundColor= "yellow";
        
    }, 3000);
setTimeout(() => {
    yellow.style.backgroundColor= "gray";
    red.style.backgroundColor= "red";
}, 6000);
setTimeout(() => {
    red.style.backgroundColor= "gray";
    
}, 9000);
}, 9000);

}
changeLight();
