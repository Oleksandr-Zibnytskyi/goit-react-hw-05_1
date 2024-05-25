import {Routes, Route} from 'react-router-dom'
import {lazy, Suspense} from 'react'

import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'
import Navigation from './components/Navigation/Navigation.jsx'
import Loader from './components/Loader/Loader.jsx'

const MovieCast = lazy(() => import('./components/MovieCast/MovieCast.jsx'));
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews.jsx'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage.jsx'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage.jsx'));


function App() {
  return (
      <>
        <Navigation />
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}> 
              <Route path="cast" element={<MovieCast />}/>
              <Route path="reviews" element={<MovieReviews />}/>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        
      </>
  )
}

export default App