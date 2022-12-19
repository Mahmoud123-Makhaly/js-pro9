let hexCode = document.getElementById("hex-code");
let body = document.body;
function changeColors(){
    body.style.background = "#" + Math.random().toString(16).slice(2,8);
    hexCode.innerHTML =  Math.random().toString(16).slice(2,8)
}