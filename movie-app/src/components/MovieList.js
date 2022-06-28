import React from "react";

import './MovieList.css'

const MovieList = (props) => {
    const Fav = props.fav;
    return (
        <>
            {
                props.movies.map((movie, index) => (
                    <div className='image-container d-flex justify-content-start m-4 img-container ' key={index}>
                        <img src={movie.Poster} alt='movie' className='img'onClick={() => props.handleFavList(movie)} style={{ width: '300px' }} />
                        <Fav />
                    </div>
                ))
            }
        </>
    );
}

export default MovieList;