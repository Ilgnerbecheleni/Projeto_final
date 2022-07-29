const btn_ligar = document.getElementById("turn_on");
const btn_desligar = document.getElementById("turn_off");
const btn_reset = document.getElementById("reset");
const lamp = document.getElementById("lamp");

let b = "des"
console.log(b.indexOf("desligar"))

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1;
}

console.log(isLampBroken())

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './Imagens/ligada.jpg'
    }

}


function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './Imagens/desligada.jpg'
    }
}

function lampBroken() {
    lamp.src = './Imagens/quebrada.jpg'
}

btn_ligar.addEventListener("click", lampOn)
btn_desligar.addEventListener("click", lampOff);

btn_reset.addEventListener("click", () => {
    document.location.reload(true);
})

lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);

lamp.addEventListener("dblclick", lampBroken);