//Funcion para generar colores random
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
//Agrega colores random a las etiquetas con clase .col
document.addEventListener("DOMContentLoaded", function () {
    var colElements = document.querySelectorAll(".col");

    if (colElements.length > 0) {
        colElements.forEach(function(element) {
            element.style.color = getRandomColor();
        });
    }
});

const etiquetasH5 = document.querySelectorAll('h5');
etiquetasH5.forEach(h5 => {
    h5.addEventListener('click', function () {
        cambiarColoresAleatorios(this);
    });
});
// document.addEventListener("DOMContentLoaded", function () {
//     var classElement = document.querySelector(".col");

//     if (classElement) {
//         classElement.style.color = getRandomColor();
        
//     }
// });