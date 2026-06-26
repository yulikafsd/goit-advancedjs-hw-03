import axios from 'axios';

export function getImagesByQuery(query) {
    return axios
        .get(
            `https://pixabay.com/api/?key=30604189-8e45b74ccc7e3af0dfc4ff4c6&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
        )
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
}
