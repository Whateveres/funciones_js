/*3)Función Original
function pintar() {
  ele.style.backgroundColor = 'yellow'
}

const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);*/

/*3.2)Función Modificada
function pintar(event) {
  //Para acceder a evento clickeado con propiedad target
  event.target.style.backgroundColor = 'yellow';
}

const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);*/

/*3.3)Función Modificada*/
function pintar(event, color ='green') {
  //Para acceder a evento clickeado con propiedad target
  event.target.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");

//Función anónima para llamar a la función pintar con argumento 'yellow'
ele.addEventListener("click", function(event) {

  pintar(event, 'yellow');

});
