import axios from 'axios';

// Функция запроса на сервер списка фильмов для Home
export async function getMoviesQuery(keyword) {
    try {
        // Параметры поиска
        const BASE_URL = 'https://api.themoviedb.org/3/';
        const searchParams = new URLSearchParams({
            api_key: '70e00eb52bcb7ab46f183ec1381bf837',
            query: keyword,
        });
        // Запрос на сервер
        const response = await axios.get(`${BASE_URL}search/movie?${searchParams}`);
        return response.data.results;
    } catch (error) {
        console.error(error);
    }
};