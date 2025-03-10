// script.js

// Fonction pour faire défiler la page vers le haut
document.getElementById('fa-solid fa-up-long').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Défilement fluide
    });
});

// Sélection des éléments de projet
const projets = document.querySelectorAll('.categorie');

// Ajout d'un écouteur d'événements pour chaque projet
projets.forEach(projet => {
    projet.addEventListener('mouseenter', function() {
        projet.style.backgroundColor = '#1e1e1e'; // Change la couleur de fond au survol
    });

    projet.addEventListener('mouseleave', function() {
        projet.style.backgroundColor = ''; // Réinitialise la couleur de fond
    });
});

// Sélection des liens de navigation
const links = document.querySelectorAll('nav a');

// Ajout d'un écouteur d'événements pour chaque lien
links.forEach(link => {
    link.addEventListener('mouseenter', function() {
        link.style.color = '#1e88e5'; // Change la couleur au survol
    });

    link.addEventListener('mouseleave', function() {
        link.style.color = ''; // Réinitialise la couleur
    });
});