import { galleryItems } from './gallery-items.js';
// Change code below this line

let galleryContainer = document.querySelector("ul.gallery");
let photos = createGalleryItem(galleryItems);

function createGalleryItem(item){
    return item.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href = "${original}">
            <img class="gallery__image" src='${preview}' alt='${description}'/>
        </a>`;
    }).join("");
}
galleryContainer.insertAdjacentHTML("beforeend", photos);

const galleryHandler = new SimpleLightbox(".gallery a", {captionData: "alt", captionDelay: 300});
galleryHandler.on("show.simplelightbox");

console.log(galleryItems);
