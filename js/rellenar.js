document.addEventListener("DOMContentLoaded", load, false);


function load(){
    funcionCrear = document.querySelector('#CREAR');
    console.log("hola");
    funcionCrear.addEventListener("click", crear, false);
}


function crear(){
    console.log("holaa");
    izenaTaula = document.getElementById('Izena').value;
    abizenaTaula = document.getElementById('Abizena').value;
    notaTaula = document.getElementById('Nota').value;
    document.querySelector('#hemen').innerHTML += "<tr><td>"+izenaTaula+"</td><td>"+abizenaTaula+"</td><td>"+notaTaula+"</td></tr>";
}
