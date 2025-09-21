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