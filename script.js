// Création d'une instance Typed.js pour l'effet de texte animé sur l'élément avec la classe "typing"
var typed = new Typed(".typing", {
    // Liste des textes à afficher de façon dynamique
    strings: [
        "Frontend Developer",
        "Blogger",
        "Freelancer",
        "Youtuber",
        "Photographer"
    ],
    typeSpeed: 100,      // Vitesse de frappe (ms par caractère)
    backSpeed: 100,      // Vitesse d'effacement (ms par caractère)
    backDelay: 1000,     // Pause avant de commencer à effacer (ms)
    loop: true           // Répète l'animation en boucle
});
/*=========== Toggle icon navbar ============*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*===========Scroll sections avtive link============*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        };
    });

/*=========== stickly navbar ============*/
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

/*=========== remove toggle icon and navbar when click navbar link (scroll) ============*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};
/*=========== remove toggle icon and navbar when click navbar link (scroll) ============*/
ScrollReveal({
    // reset: true,
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*=========== scroll up btn ============*/
let scrollUp = document.querySelector('.scroll-up-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollUp.classList.add('show');
    } else {
        scrollUp.classList.remove('show');
    }    })