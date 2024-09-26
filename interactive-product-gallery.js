let mainImage = document.querySelector("#mainImage");
let thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
        mainImage.src = thumb.src;
    });
});
