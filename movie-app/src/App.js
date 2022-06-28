import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';
import MovieHeading from './components/MovieHeading';
import AddFav from './components/AddFav'
import RemoveFAv from './components/RemoveFav';

function App() {

  const [movies, setMovie] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favv, setFavv] = useState([]);

  const fetchMovies = async (searchValue) => {
    const movieList = await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=ccbc5dd6`)
    let movieListJson = await movieList.json()
    if (movieListJson.Search) {
      
      setMovie(movieListJson.Search)
    }
  }

  useEffect(() => {
    fetchMovies(searchValue);
  }, [searchValue])

  const addToFav = (movie) => {
    const newFavMovie = [...favv, movie]
    setFavv(newFavMovie)
  }

  const removeToFav = (movie) => {
    const newFavMovie = favv.filter(fav => fav.imdbID !== movie.imdbID)
    setFavv(newFavMovie)
  }

  return (
    <>
      <div className='container-fluid movie-app'>
        <div className='row d-flex align-items-center mt-4'>
          <MovieHeading heading="Movies" />
          <SearchBox srchValue={searchValue} setSrchValue={setSearchValue} />
        </div>

        <div className='row'>
          <MovieList
            handleFavList={addToFav}
            movies={movies}
            fav={AddFav} />
        </div>

        <div className='row d-flex align-items-center mt-4'>
          <MovieHeading heading="Favrouites" />
        </div>
        <div className='row'>
          <MovieList movies={favv} handleFavList={removeToFav} fav={RemoveFAv} />
        </div>
      </div>
    </>
  );
}

export default App;
