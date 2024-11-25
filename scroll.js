window.addEventListener('scroll', () => {
    if (window.scrollY < 600 && window.scrollY >= 0) {
        cambiarPosicion(0); 
        console.log('Estoy en start');
    } else if (window.scrollY >= 700 && window.scrollY < 1200) {
        cambiarPosicion(1); 
        console.log('Estoy en el medio');
    } else if (window.scrollY >= 1200 && window.scrollY < 1800) {
        cambiarPosicion(2); 
        console.log('Estoy en el dos');
    } else if (window.scrollY >= 1800) {
        cambiarPosicion(3); 
        console.log('Estoy en el final');
    }
});

function cambiarPosicion(x) {

    let hijos = Array.from(document.querySelector('.menu-final').children);

    hijos.forEach(element => {
        element.style.borderRight = '1px solid black';
    });
    hijos[x].style.borderRight = '1px solid white';
}
