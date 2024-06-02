import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getMovieCast } from '../../services';
import { Loader } from "components/Loader";
import { CastItem, WrapperCast } from "./Cast.styled";

export default function Cast () {
    const { id } = useParams();

    const [movieCast, setMovieCast] = useState([]);
    const [load, setLoad] = useState(false);

    // Запрос на бекэнд
    useEffect(() => {
        setLoad(true);
        getMovieCast(id)
            .then(response => setMovieCast(response))
            .finally(() => setLoad(false));
    }, [id]);

    return (
        <WrapperCast>
            {load && <Loader />}
            {/* Если нет списка актеров, то выводится сообщение: "No information about actors" */}
            {movieCast.length === 0
                ? <h2>No information about actors</h2>
                :
                <ul>
                    {movieCast.map(({ name, profile_path, character }) =>
                        <CastItem key={name}>
                            <p>{name}</p>
                            <img
                            src={
                                profile_path
                                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                                : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
                                }
                            alt={name}
                            width="100px"
                            />
                            <p>Character: {character}</p>
                        </CastItem>
                    )}
                </ul>
            }

        </WrapperCast>
    )
};