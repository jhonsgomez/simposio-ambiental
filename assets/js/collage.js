document.addEventListener('DOMContentLoaded', function () {
    // Solo usamos el layout 3 como layout fijo
    const fixedLayout = {
        'collage-1': { top: '0', left: '0', width: '65%', height: '65%', zIndex: '5' },
        'collage-3': { bottom: '0', right: '0', width: '33%', height: '65%', zIndex: '3' },
        'collage-4': { bottom: '0', left: '0', width: '30%', height: '33%', zIndex: '4' },
        'collage-5': { bottom: '0', left: '32%', width: '32%', height: '33%', zIndex: '2' },
        'collage-2': { top: '0', right: '0', width: '33%', height: '33%', zIndex: '1' }
    };

    // Aplicar el layout fijo
    for (let id in fixedLayout) {
        const element = document.getElementById(id);
        const styles = fixedLayout[id];
        for (let prop in styles) {
            element.style[prop] = styles[prop];
        }
    }

    // Añadimos un pequeño efecto de animación al cargar
    setTimeout(() => {
        document.querySelectorAll('.collage-item').forEach(item => {
            item.style.transform = 'scale(1)';
            item.style.opacity = '1';
        });
    }, 100);
});