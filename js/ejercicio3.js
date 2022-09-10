let btn = document.getElementById("btn")

function triangulo(){
    let lado1 = document.getElementById("lado1").value
    lado1 = parseInt(lado1)
    let lado2 = document.getElementById("lado2").value
    lado2 = parseInt(lado2)
    let lado3 = document.getElementById("lado3").value
    lado3 = parseInt(lado3)

    if(lado1==lado2 && lado2==lado3 ){

        alert("Corresponden a un triángulo equilatero")
    }
    else if(lado1==lado2 || lado1==lado3 || lado2==lado3){
   
        alert("Corresponde a un triángulo isosceles")
    }   
    else if(lado1!=lado2 && lado2!=lado3 ){
   
        alert("Corresponde a un triangulo escaleno")
    }
    else{
        alert('error 34')
    }
}

btn.addEventListener('click',triangulo)