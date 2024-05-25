import {Link} from 'react-router-dom'

export default function MovieList ({movies, imageDetails}) {
    return (
        <div>
            <ul>
                {movies.map((movie) => {
                    return (
                        <li key={movie.id}>
                            <Link to={`${movie.id}`}>
                                <img src={movie.poster_path === null ? 'https://gdr.one/simg/185x278/d0e2ed/fff?text=poster' : `${imageDetails.baseUrl}${imageDetails.mediumSize}/${movie.poster_path}`} alt={movie.title} />
                                <p>{movie.title}</p>
                            </Link>
                            
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}









