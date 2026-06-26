import SimpleLightbox from 'simplelightbox';

const galleryElem = document.querySelector('.gallery');
const loaderElem = document.querySelector('.loader');
const loadingTextElem = document.querySelector('.loading-text');

const createCard = ({
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
}) => {
    return `<li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
    <img
    class="gallery-image"
    src="${webformatURL}"
    alt="${tags.match(/([^,]+,){0,2}[^,]+/)[0]}"
    loading="lazy"
    />
    <ul class="info-list">
        <li class="info-item">
            <b class="info-label">Likes</b>
            <span class="info-value">${likes}</span>
        </li>
        <li class="info-item">
            <b class="info-label">Views</b>
            <span class="info-value">${views}</span>
        </li>
        <li class="info-item">
            <b class="info-label">Comments</b>
            <span class="info-value">${comments}</span>
        </li>
        <li class="info-item">
            <b class="info-label">Downloads</b>
            <span class="info-value">${downloads}</span>
        </li>
    </ul>
    </a>
    </li>`;
};

// Open modal upon click on an image
const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    className: 'custom-lightbox',
});

export function createGallery(images) {
    const markup = images.map(image => createCard(image)).join('');

    galleryElem.insertAdjacentHTML('beforeend', markup);

    gallery.refresh();
}

export function clearGallery() {
    galleryElem.innerHTML = '';
}

export function showLoader() {
    loaderElem.classList.add('visible');
    loadingTextElem.classList.add('visible');
}

export function hideLoader() {
    loaderElem.classList.remove('visible');
    loadingTextElem.classList.remove('visible');
}
