document.addEventListener("DOMContentLoaded", load, false);

array_imagenes = ["../img/wallpaper_0.jpg", "../img/wallpaper_1.jpg", "../img/wallpaper_2.jpg", "../img/wallpaper_3.jpg", "../img/wallpaper_4.jpg", "../img/wallpaper_5.jpg"];

function load(){
    argazkiak = document.getElementsByName('galeriafoto');

    argazkiak2 = document.getElementById('imgContenedor');

    for(let p = 0; p < argazkiak.length; p++){
        argazkiak[p].addEventListener('click', function(){imagen(p)});
    }

    argazkiak2.addEventListener('click', imagen2, false);
}

aukera=0;
numeroImagen = 1;
function imagen(i){
    for(let f = 0; f < 6; f++ ){
        if(f != i){
            document.getElementsByName('galeriafoto')[f].style.color = "white";
        }
        else{
            document.getElementsByName('galeriafoto')[f].style.color = "red";
        }
    }
    document.getElementById('imgContenedor').src = array_imagenes[i];
    numeroImagen = i + 1;
}

function imagen2(){
    if(numeroImagen===6){
        numeroImagen = 0;
    }
    imagen(numeroImagen);
    
}