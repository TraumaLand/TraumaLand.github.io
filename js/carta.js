function openCard() {
    const card = document.getElementById('card');
    const paper = document.getElementById('paper');
    const text = document.getElementById('cardText');

    // Muestra la carta y el texto con la animación
    card.style.display = 'block';
    setTimeout(function () {
        card.classList.add('open');
        paper.style.opacity = 1;
        text.innerHTML = "Si has llegado hasta aquí te felicito, o eres muy listo o sabes algo de código. La web se irá actualizando cada cierto tiempo (el cuál también puedes descubrir en la web actualmente) con nuevos puntos secretos que esconden pistas. ¿Pistas de qué? Que sea el tiempo el que lo decida";
    }, 100);
}