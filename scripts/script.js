document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const images = document.querySelectorAll(".clickable-img");
    let currentIndex = 0;

    // Ouvre la modale avec l'image cliquée
    images.forEach((img, index) => {
        img.onclick = function() {
            modal.classList.add("modal--open");  // <-- Remplace modal.style.display = "block"
            modalImg.src = this.src;
            currentIndex = index;
        }
    });

    // Ferme la modale
    closeBtn.onclick = function() {
        modal.classList.remove("modal--open");  // <-- Remplace modal.style.display = "none"
    }

    // Navigue vers l'image précédente
    prevBtn.onclick = function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        modalImg.src = images[currentIndex].src;
    }

    // Navigue vers l'image suivante
    nextBtn.onclick = function() {
        currentIndex = (currentIndex + 1) % images.length;
        modalImg.src = images[currentIndex].src;
    }

    // Ferme la modale en cliquant en dehors de l'image
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.classList.remove("modal--open");  // <-- Remplace modal.style.display = "none"
        }
    }
});
