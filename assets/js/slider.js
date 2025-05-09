$(document).ready(function () {
    var slideCount = $('.slide').length;
    var currentSlide = 0;
    var slideWidth = 100; // en porcentaje

    // Función para mover el slider
    function moveSlider() {
        currentSlide = (currentSlide + 1) % slideCount;
        $('.slider').css('transform', 'translateX(-' + (currentSlide * slideWidth) + '%)');
    }

    // Iniciar el slider automático
    var sliderInterval = setInterval(moveSlider, 3000); // Cambia de imagen cada 3 segundos

    // Pausar el slider al pasar el mouse por encima (opcional)
    $('.slider-container').hover(
        function () {
            clearInterval(sliderInterval);
        },
        function () {
            sliderInterval = setInterval(moveSlider, 3000);
        }
    );
});