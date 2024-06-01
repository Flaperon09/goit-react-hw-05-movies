import axios from 'axios';

// Функция запроса на сервер списка фильмов для Home
export async function getMoviesList() {
    try {
        // Параметры поиска
        const BASE_URL = 'https://api.themoviedb.org/3/';
        const searchParams = new URLSearchParams({
            api_key: '70e00eb52bcb7ab46f183ec1381bf837',
        });
        // Запрос на сервер
        const response = await axios.get(`${BASE_URL}trending/all/day?${searchParams}`);
        return response.data.results;
    } catch (error) {
        console.error(error);
    }
};


// Функция запроса на сервер
// export async function getPhotos(wordForSearch, startPage) {
//     try {
//         // Удаление времени из запроса
//         const SearchPhrase = wordForSearch.slice(14, wordForSearch.length);
//         // Параметры поиска
//         const BASE_URL = 'https://pixabay.com/api/';
//         const searchParams = new URLSearchParams({
//             key: '2842151-bd094d52b36040a4b6da8b1da',
//             format: 'json',
//             q: SearchPhrase, // Поисковая фраза => Введённое слово
//             image_type: 'photo',
//             orientation: 'horizontal',
//             safesearch: 'true',
//             page: startPage,
//             per_page: 12,
//         });
//         // Запрос на сервер
//         const response = await axios.get(`${BASE_URL}?${searchParams}`);
//         return response;
//     } catch (error) {
//         console.error(error);
//     }
// }