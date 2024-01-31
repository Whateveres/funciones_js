//Definiendo variables por Id
const priDiv = document.getElementById('uno')
const segDiv = document.getElementById('dos')
const terDiv = document.getElementById('tres')
const cuaDiv = document.getElementById('cuatro')

//Función para cambiar de color
function changeColor() {
    this.style.backgroundColor = 'black';
}

//Definiendo Evento para que cambie de color al "escuchar click"
priDiv.addEventListener('click', changeColor)
segDiv.addEventListener('click', changeColor)
terDiv.addEventListener('click', changeColor)
cuaDiv.addEventListener('click', changeColor)




