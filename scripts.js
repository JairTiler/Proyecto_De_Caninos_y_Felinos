

document.addEventListener('DOMContentLoaded', function () {
    const verMasContainers = document.querySelectorAll('.ver-mas-container');

    verMasContainers.forEach(container => {
        const botonVerMas = container.querySelector('.ver-mas');
        const textoVerMas = container.querySelector('.texto-ver-mas');
        const circuloFlecha = container.querySelector('.circulo-flecha');
        const descripcionCaja = container.parentElement.querySelector('.descripcion-caja');

        container.addEventListener('click', function () {
            container.classList.toggle('active');
            if (descripcionCaja.style.maxHeight === '0px' || descripcionCaja.style.maxHeight === '') {
                descripcionCaja.style.maxHeight = descripcionCaja.scrollHeight + 'px';
                textoVerMas.style.display = 'inline';
                circuloFlecha.innerHTML = '&#x25B2;';
                circuloFlecha.classList.add('rotado');
            } else {
                descripcionCaja.style.maxHeight = '0px';
                textoVerMas.style.display = 'none';
                circuloFlecha.innerHTML = '&#x25BC;';
                circuloFlecha.classList.remove('rotado');
            }
        });
    });
});
