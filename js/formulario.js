document.addEventListener("DOMContentLoaded", load, false);

function load(){
    document.getElementById("botoia").addEventListener("click", comprobar, false);
    document.getElementById("nombre").addEventListener("keypress",function(event){
        var res=teklaIrakurri(event);
        if(res==false){
            event.preventDefault();
        }
    });

    document.getElementById("edad").addEventListener("keypress",function(event){
        var ros=teklaIrakurriAdina(event);
        if(ros==false){
            event.preventDefault();
        }
    });}

function comprobar(e){
    e.preventDefault();
    izena = document.getElementById('nombre');    
    izenaBalioa = izena.value;  
    adina = document.getElementById('edad');
    checkbox = document.getElementById('acepto').checked; 
    ikasketak = document.getElementById('estudios');
    ikasketaBalioa = ikasketak.value;
    if(izenaBalioa.length < 2){
        alert("El nombre debe tener al menos dos caracteres");
        return false;
    }
    else if (edad.value<10 || edad.value>100 ){
        alert("La edad solo puede ser un numero entre 10 y 100");
        return false;
    }
    else if(ikasketaBalioa === ""){
        alert("Debes seleccionar un elemento");
        return false;
    }
    else if (!checkbox) {
        alert('Debes aceptar las condiciones');
        return false;
    }
    return true;
}
function teklaIrakurri(e) {
    var karakterea = e.key;

    if ((karakterea < "a" || karakterea > "z") && (karakterea < "A" || karakterea > "Z")) {
        return false;
    } else {
        return true;
    }
}

function teklaIrakurriAdina(e) {
    var karakterea = e.key;

    if ((karakterea < "0" || karakterea > "9")) {
        return false;
    } else {
        return true;
    }
}