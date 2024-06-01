import { getMoviesList } from '../../services';
import { useState, useEffect } from 'react';
import { MoviesListHeader, MoviesList, MoviesListItem } from './Home.styled';
import { Loader } from "components/Loader";
import { Link, useLocation } from 'react-router-dom';

export default function Home () {

    const location = useLocation();

    const [moviesList, setMoviesList] = useState([]);
    const [load, setLoad] = useState(false);
    
    // Запрос на бекэнд
    useEffect(() => {
        setLoad(true);
        getMoviesList()
            .then(response => setMoviesList(response))
            .finally(() => setLoad(false));
    }, []);

    return (
        <div>
            {load && <Loader />}
            <MoviesListHeader>Trending today</MoviesListHeader>
            <MoviesList>
                {moviesList.map(({ id, title, name }) => (
                    <Link key={id} to={`movies/${id}`} state={{ from: location }}>
                        {/* Если нет параметра title, то подставляется параметр name */}
                        <MoviesListItem>{title ? title : name}</MoviesListItem>
                    </Link>
                ))}
            </MoviesList>
        </div>
    )
    
};