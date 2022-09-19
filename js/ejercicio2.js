let btn = document.getElementById("btn")
function temperatura(){
    let gra = document.getElementById("grados").value
    gra = parseInt(gra)
    let se1 = document.getElementById("se1").value
    se1 = parseInt(se1)
    let se2 = document.getElementById("se2").value
    se2 = parseInt(se2)
    let result 

    if (se1==1 && se2==2) {
        result = ((gra-32)/1.8).toFixed(2)
        alert (result)
    }
    else if (se1==1 && se2==3){
        result = ((gra-32)* 5/9 + 273.15).toFixed(2)
        alert (result)
    }
    else if(se1==2 && se2==1){
        result = ((gra * 9/5)+32).toFixed(2)
        alert (result)
    }
    else if(se1==2 && se2==3){
        result = (gra + 273.15).toFixed(2)
        alert (result)
    }
    else if(se1==3 && se2==1){
        result = (( gra - 273.15) * 9/5 + 32).toFixed(2)
        alert (result)
    }
    else if(se1==3 && se2==2){
        result = (gra - 273.15).toFixed(2)
        alert (result)
    }
}
btn.addEventListener('click', temperatura)