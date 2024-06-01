import axios from 'axios';

// Функция запроса на сервер данных по фильму
export async function getMovieCast(id) {
    try {

        // Параметры поиска
        const BASE_URL = 'https://api.themoviedb.org/3/';
        const searchParams = new URLSearchParams({
            api_key: '70e00eb52bcb7ab46f183ec1381bf837',
        });

        // Запрос на сервер
        const response = await axios.get(`${BASE_URL}movie/${id}/credits?${searchParams}`);
        return response.data.cast;
        
    } catch (error) {
        console.error(error);
    }
};