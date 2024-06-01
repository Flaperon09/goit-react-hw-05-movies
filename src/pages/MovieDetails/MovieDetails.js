import { Outlet, useParams, Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import { getMovie } from '../../services';
import { Loader } from "components/Loader";
import {
    ButtonGoBack, WrapperInfo, MovieInfo, MovieTitle, MovieScore, MovieOverviewTitle,
    MovieOverview, MovieGenresTitle, MovieGenresList, MovieGenres, WrapperAddInfo, AddInfoTitle,
    AddInfoItem
} from "./MovieDetails.styled";

export default function MovieDetails () {

    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/');

    const { id } = useParams();

    const [movie, setMovie] = useState([]);
    const [load, setLoad] = useState(false);

    // Запрос на бекэнд
    useEffect(() => {
        setLoad(true);
        getMovie(id)
            .then(response => setMovie(response))
            .finally(() => setLoad(false));
    }, [id]);

    const {
        title,
        release_date='',
        popularity,
        overview,
        genres=[],
        poster_path,
        original_title,
    } = movie;

    return (
        <div>
            {load && <Loader />}
            {/* Если сервер ответил отсутствием данных (error.response.data.success = false), то показываем сообщение об этом */}
            {!movie
                ? <div>
                    <Link to={backLinkLocationRef.current}>
                        <ButtonGoBack type="button">Go back</ButtonGoBack>
                    </Link>
                    <h2>The resource you requested could not be found.</h2>
                </div>
                : <div>
                    <Link to={backLinkLocationRef.current}>
                        <ButtonGoBack type="button">Go back</ButtonGoBack>
                    </Link>
                <WrapperInfo>
                    <img
                        src={
                            poster_path
                                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                                : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
                        }
                        alt={original_title}
                        width="300px"
                    />
                    <MovieInfo>
                        <MovieTitle>{title} ({release_date.slice(0, 4)})</MovieTitle>
                        <MovieScore>User Score: {popularity}</MovieScore>
                        <MovieOverviewTitle>Overview</MovieOverviewTitle>
                        <MovieOverview>{overview}</MovieOverview>
                        <MovieGenresTitle>Genres</MovieGenresTitle>
                        <MovieGenresList>
                            {genres.map(genre => (genre ? <MovieGenres key={genre.id}>{genre.name}</MovieGenres> : null))}
                        </MovieGenresList>
                    </MovieInfo>
                </WrapperInfo>
                <WrapperAddInfo>
                    <AddInfoTitle>Additional information</AddInfoTitle>
                    <ul>
                        <AddInfoItem>
                                <Link to={'cast'}>Cast</Link>
                        </AddInfoItem>
                        <AddInfoItem>
                                <Link to={'reviews'}>Reviews</Link>
                        </AddInfoItem>
                    </ul>
                </WrapperAddInfo>
            </div>}
            <Outlet />
        </div>
    )
    
};