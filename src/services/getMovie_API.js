import axios from 'axios';

// Функция запроса на сервер данных по фильму
export async function getMovie(id) {
    try {

        // Параметры поиска
        const BASE_URL = 'https://api.themoviedb.org/3/';
        const searchParams = new URLSearchParams({
            api_key: '70e00eb52bcb7ab46f183ec1381bf837',
        });

        // Запрос на сервер
        const response = await axios.get(`${BASE_URL}movie/${id}?${searchParams}`);
        return response.data;
        
    } catch (error) {
        // Если сервер ответил ошибкой (отсутствие данных), то возвращаем в ответе false
        console.error(error.response.data.success);
        return error.response.data.success;
    }
};