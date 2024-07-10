// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// console.log(galleryItems)

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const listElement = document.querySelector(".gallery");
const photosMarkup = createGalleryItem(galleryItems);

function createGalleryItem(element) {
    return element
    .map(({preview,original,description}) => {
        return `<a class='gallery__link' href="${preview}">
            <img class="gallery__image" src="${original}" alt="${description}"/>
            </a>
            `;
    })
    .join('');
}

listElement.insertAdjacentHTML("beforeend", photosMarkup);

const galleryHandler = new SimpleLightbox('.gallery a', {
    captionsData:'alt',
    captionDelay:250,
 });
 galleryHandler.on("show.simplelightbox")
