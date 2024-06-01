import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getMovieReviews } from '../../services';
import { Loader } from "components/Loader";
import { WrapperReviews, ReviewsItem, ReviewsAuthor } from "./Reviews.styled";

export default function Reviews () {
    const { id } = useParams();

    const [movieReviews, setMovieReviews] = useState([]);
    const [load, setLoad] = useState(false);

    // Запрос на бекэнд
    useEffect(() => {
        setLoad(true);
        getMovieReviews(id)
            .then(response => setMovieReviews(response))
            .finally(() => setLoad(false));
    }, [id]);

    return (
        <WrapperReviews>
            {load && <Loader />}
            <ul>
                {movieReviews.map(({ author, id, content }) =>
                    <ReviewsItem key={id}>
                        <ReviewsAuthor>Author: {author}</ReviewsAuthor>
                        <p>{content}</p>
                    </ReviewsItem>)}
            </ul>

        </WrapperReviews>
    )
};