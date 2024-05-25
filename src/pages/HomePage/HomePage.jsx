import {Link, useLocation} from 'react-router-dom'
import { useState, useEffect } from 'react'
import {fetchTrendMovies} from '../../Api/apiServices'
import Loader from '../../components/Loader/Loader'
import toast from 'react-hot-toast'
import css from './HomePage.module.css'

const notify = () => toast.error('Something went wrong. Please, try again!', {
    style: {
      border: '1px solid #000000',
      padding: '16px',
      color: '#000000',
    },
    iconTheme: {
      primary: '#000000',
      secondary: '#f5f5f5',
    },
  });


export default function HomePage() {
    const [trendMovies, setTrendMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        async function getTrendMovies() {
            setLoading(true);
            try {
              const data = await fetchTrendMovies();
              setTrendMovies(data.results);
              setLoading(false);
            } catch (error) {
                notify();
                console.log(error);
            }
        }
      
        getTrendMovies();
    }, [])

    return (
        <main className='container'>
            <div className={css.homePage}>
                <h1>Trending Today</h1>
                <ul className={css.movieList}>
                    {trendMovies.map(movie => (
                        <li key={movie.id} >
                            <Link to={`/movies/${movie.id}`} state={{ from: location }} className={css.item}>
                                {movie.title}
                            </Link>
                        </li>
                    ))}
                    {loading && <Loader />}
                </ul>
            </div>
        </main>

    )
}