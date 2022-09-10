let btn = document.getElementById("btn")

function profesores(){
    let se1 = document.getElementById("se1").value
    se1 = parseInt(se1)
    let se2 = document.getElementById("se2").value
    se2 = parseInt(se2)
    let se3 = document.getElementById("se3").value
    se3 = parseInt(se3)

    if(se1==1 && se2==1 && se3==1 ){
        alert("usted es Cristian Buitrago y da clases de PHP")
    }
    else if(se1==2 && se2==2 && se3==2 ){
        alert("usted es Tatis Cabrera y da clases de JAVASCRIPT")
    }
    else if(se1==3 && se2==3 && se3==3 ){
        alert("usted es Fernando Galindo y da clases de BASE DE DATOS")
    }
    else if(se1==4 && se2==4 && se3==4 ){
        alert("usted es Carolina Forero y da clases de PROYECTO")
    }
    else if(se1==5 && se2==5 && se3==5 ){
        alert("usted es Adriana Duarte y da clases de DISEÑO")
    }
    else if(se1==6 && se2==6 && se3==6 ){
        alert("usted es Yaneth Castillo y da clases de GESTION AMBIENTAL")
    }
    else if(se1==7 && se2==7 && se3==7 ){
        alert("usted es Luis Baquero y da clases de CULTURA FISICA")
    }
    else {
        alert("Los datos no coinciden")
    }
}

btn.addEventListener('click',profesores)