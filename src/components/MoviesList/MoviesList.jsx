import { Link } from 'react-router-dom';
import css from './MoviesList.module.css';

export default function MovieList({ movies, location }) {
    const defaultImg = 'https://via.placeholder.com/500x750?text=No+Image';

    const poster = (movie) => {
        const { id, title, poster_path } = movie;
        const posterUrl = poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : defaultImg;
        return { posterUrl, id, title };
    }

    return (
        <ul className={css.movieList}>
            {movies.map(movie => {
                const { posterUrl, id, title } = poster(movie);
                return (
                    <li key={id} className={css.movieCard}>
                        <Link to={`/movies/${id}`} state={location}>
                            <img src={posterUrl} alt={title} className={css.poster} />
                        </Link> 
                    </li>
                );
            })}
        </ul>
    );
}

  














