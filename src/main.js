import iziToast from 'izitoast';

import { getImagesByQuery } from './js/pixabay-api';
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');

const onSubmit = e => {
    e.preventDefault();

    const value = form.elements['search-text'].value.trim();

    if (value == '') {
        iziToast.warning({
            position: 'topRight',
            message: 'Your search query is empty. Please try again!',
        });
        form.reset();
        return;
    }

    clearGallery();

    showLoader();

    getImagesByQuery(value)
        .then(data => {
            const dataLength = Object.keys(data.hits).length;

            if (dataLength <= 0) {
                hideLoader();

                iziToast.error({
                    position: 'topRight',
                    message:
                        'Sorry, there are no images matching your search query. Please try again!',
                });
                return;
            }

            hideLoader();

            createGallery(data.hits);
        })
        .catch(error => {
            iziToast.error({
                position: 'topRight',
                message: error,
            });
        });

    form.reset();
};

form.addEventListener('submit', onSubmit);
