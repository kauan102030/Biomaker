function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = 'src/img/menu_white_36dp.svg';
    }else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = 'src/img/close_white_36dp.svg';
    }
}



document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    document.getElementById('prev').addEventListener('click', () => {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        items[currentIndex].classList.add('active');
    });

    document.getElementById('next').addEventListener('click', () => {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
    });
});

// IMAGEM CLICAVEL

document.addEventListener('DOMContentLoaded', function () {
    const image = document.querySelector('.image_1');
    if (image) {
        image.addEventListener('click', function () {
            window.location.href = './././bacteria.html';
        });
    } else {
        console.error("Elemento com a classe 'image' não foi encontrado.");
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const image = document.querySelector('.image_2');
    if (image) {
        image.addEventListener('click', function () {
            window.location.href = './././virus_envelopado.html';
        });
    } else {
        console.error("Elemento com a classe 'image' não foi encontrado.");
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const image = document.querySelector('.image_3');
    if (image) {
        image.addEventListener('click', function () {
            window.location.href = './././bacteriofago.html';
        });
    } else {
        console.error("Elemento com a classe 'image' não foi encontrado.");
    }
});