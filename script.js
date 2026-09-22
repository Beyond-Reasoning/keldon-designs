// JavaScript source code
document.addEventListener("DOMContentLoaded", function () {

    const images = document.querySelectorAll(".lightbox-image");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeButton = document.querySelector(".lightbox-close");


    images.forEach(function (image) {

        image.addEventListener("click", function () {

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;

            lightbox.classList.add("active");

        });

    });


    closeButton.addEventListener("click", function () {

        lightbox.classList.remove("active");

    });


    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {

            lightbox.classList.remove("active");

        }

    });


    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            lightbox.classList.remove("active");

        }

    });

});