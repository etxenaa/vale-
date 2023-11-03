document.addEventListener("DOMContentLoaded", load, false);


function load(){
    cuadros = document.querySelectorAll('.cfila1');

        for(let a = 0; a < cuadros.length; a++){
            console.log(a);
            cuadros[a].addEventListener("mouseover", function(){cambio(a, '40px', 0)});
            cuadros[a].addEventListener("mouseout", function(){cambio(a, '15px', 1)});
        }
}
function cambio(elementua, tamaina, kolorea){   
    opcion = document.getElementsByName("opciones");
    console.log(elementua + tamaina + kolorea);
    if(opcion[0].checked){
        if(kolorea === 0){koloreaa = 'red';}
        else{if(elementua === 1){koloreaa = 'blue';}else{koloreaa = 'white';}}

        document.querySelectorAll(".cfila1")[elementua].style.backgroundColor = koloreaa;
    }
    if(opcion[1].checked){
        document.querySelectorAll(".cfila1")[elementua].style.fontSize = tamaina;
    }
}