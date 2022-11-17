const navMenuIcon = document.querySelector(".navMenuIcon");
const menuMobile = document.querySelector(".navMenu");


navMenuIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    menuMobile.classList.toggle('inactive');
}

// Prueba ahora desde fedora =>