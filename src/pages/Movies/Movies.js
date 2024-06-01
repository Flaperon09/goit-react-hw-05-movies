import { Link, useSearchParams, useLocation } from "react-router-dom";
import { getMoviesQuery } from '../../services';
import { useState, useEffect, useRef } from 'react';
import { Loader } from "components/Loader";
import { MoviesList, MoviesListItem } from './Movies.styled';

export default function Movies() {
    const ref = useRef() // Ref для очистки input

    const location = useLocation();

    const [searchParams, setSearchParams] = useSearchParams(); // Переменная запроса
    let query = searchParams.get("query") ?? ""; // Изменяемый параметр запроса

    let searchWord = ''; // Переменная для хранения запросного слова
    
    const [moviesQuery, setMoviesQuery] = useState([]); // Хранение ответа бекэнда
    const [load, setLoad] = useState(false);

    // === Запрос на бекэнд
    useEffect(() => {
        if (query === '') return;
        setLoad(true);
        getMoviesQuery(query)
            .then(response => setMoviesQuery(response))
            .finally(() => setLoad(false));
        ref.current.value = ''; // Очистка ref
    }, [query]);
    
    // === Функция получения запроса
    const handleSubmit = (event) => {
        event.preventDefault();
        // Изменение строки запроса
        setSearchParams({ query: searchWord });
    };

    // === Функция получения запросного слова
    const updateQueryString = evt => {
        searchWord = evt.target.value.toLowerCase();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={ref} onChange={updateQueryString}></input>
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