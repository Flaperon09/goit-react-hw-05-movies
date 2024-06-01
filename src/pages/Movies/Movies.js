import { Link, useSearchParams, useLocation } from "react-router-dom";
import { getMoviesQuery } from '../../services';
import { useState, useEffect } from 'react';
import { Loader } from "components/Loader";
import { MoviesList, MoviesListItem } from './Movies.styled';

export default function Movies () {

    const location = useLocation();

    const [searchParams, setSearchParams] = useSearchParams(); // Изменение строки запроса
    let query = searchParams.get("query") ?? ""; // Изменяемый параметр запроса
    
    const [inputSearch, setInputSearch] = useState(''); // Поисковый запрос
    const [moviesQuery, setMoviesQuery] = useState([]); // Хранение ответа бекэнда
    const [load, setLoad] = useState(false);

    // === Запрос на бекэнд
    useEffect(() => {
        if (inputSearch.length === 0) return;
        setLoad(true);
        getMoviesQuery(inputSearch)
            .then(response => setMoviesQuery(response))
            .finally(() => setLoad(false));
    }, [inputSearch]);
    
    // === Функция получения запроса
    const handleSubmit = (event) => {
        event.preventDefault();
        // Получение запроса из поля input
        setInputSearch(`${event.target[0].value.toLowerCase()}`);
    };

    // === Функция удаления "?query=" в строке запроса при очистке input
    const updateQueryString = evt => {
        evt.target.value === '' ? setSearchParams({}) : setSearchParams({ query: evt.target.value })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={query} onChange={updateQueryString}></input>
                <button type="submit">Search</button>
            </form>
            <div>
                {load && <Loader />}
                <MoviesList>
                    {moviesQuery.map(({ id, title, name }) => (
                        <Link key={id} to={`${id}`} state={{ from: location }}>
                            {/* Если нет параметра title, то подставляется параметр name */}
                            <MoviesListItem>{title ? title : name}</MoviesListItem>
                        </Link>
                    ))}
                </MoviesList>
            </div>
        </div>
    )
};