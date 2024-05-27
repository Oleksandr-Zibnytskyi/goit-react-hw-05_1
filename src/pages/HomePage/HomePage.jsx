import Loader from '../../components/Loader/Loader'
import { useState, useEffect } from 'react';
import { fetchTrendMovies } from '../../apiServices';
import MoviesList from '../../components/MoviesList/MoviesList';
import css from './HomePage.module.css'

export default function HomePage() {

    const [trendingMovies, settrendingMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)




useEffect(() => {
    async function getMovies() {
  try {
    setLoading(true)
    const data = await fetchTrendMovies();
    settrendingMovies(data.results);
  } catch (error) {
    setError(true)
  } finally {setLoading(false)}
    } 
    getMovies();
}, [])



    return (
        <div className={css.defContainer}>
            
            <h1 className={css.title}>Trending Movies</h1>
            {error && <p>Oops! There was an error! Try reloading!</p> }
            {loading && <Loader />}
            <MoviesList movies={trendingMovies}/>
        </div>
    );
}



