let btn = document.getElementById("btn")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")
let btn7 = document.getElementById("btn7")
let btn8 = document.getElementById("btn8")
let operacion

function perimetro(){
    let pcu = document.getElementById("pcu").value
    pcu = parseInt(pcu)
    operacion = pcu*4
    alert(operacion)
}
function perimetro2(){
    let ptri = document.getElementById("ptri").value
    ptri = parseInt(ptri)
    let ptri2 = document.getElementById("ptri2").value
    ptri2 = parseInt(ptri2)
    let ptri3 = document.getElementById("ptri3").value
    ptri3 = parseInt(ptri3)
    operacion = ptri+ptri2+ptri3
    alert(operacion)
}
function perimetro3(){
    let pre = document.getElementById("pre").value
    pre = parseInt(pre)
    let pre2 = document.getElementById("pre2").value
    pre2 = parseInt(pre2)
    operacion = (pre*2)+(pre2*2)
    alert(operacion)
}
function perimetro4(){
    let pci = document.getElementById("pci").value
    pci = parseInt(pci)
    operacion = 2*3.14*pci
    alert(operacion)
}
function area(){
    let acu = document.getElementById("acu").value
    acu = parseInt(acu)
    operacion = acu*acu
    alert(operacion)
}
function area2(){
    let atri = document.getElementById("atri").value
    atri = parseInt(atri)
    let atri2 = document.getElementById("atri2").value
    atri2 = parseInt(atri2)
    operacion = (atri*atri2)/2
    alert(operacion)
}
function area3(){
    let are = document.getElementById("are").value
    are = parseInt(are)
    let are2 = document.getElementById("are2").value
    are2 = parseInt(are2)
    operacion = are*are2
    alert(operacion)
}
function area4(){
    let aci = document.getElementById("aci").value
    aci = parseInt(aci)
    operacion = (aci*aci)*3.14
    alert(operacion)
}
btn.addEventListener('click',perimetro)
btn3.addEventListener('click',perimetro2)
btn5.addEventListener('click',perimetro3)
btn7.addEventListener('click',perimetro4)
btn2.addEventListener('click',area)
btn4.addEventListener('click',area2)
btn6.addEventListener('click',area3)
btn8.addEventListener('click',area4)