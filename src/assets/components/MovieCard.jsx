import React from 'react'

function onFavouriteBtn() {
    alert("clicked")
}

function MovieCard({ movie }) {
    return (
        <div className='Movie-card'>
            <div className="movie-poster">
                <img src={movie.url} />

                <div className="movie-overlay">
                    <button
                        className='favourite-btn'
                        onClick={onFavouriteBtn}
                    >
                        ❤️
                    </button>
                </div>
            </div>

            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release}</p>
            </div>
        </div>
    )
}

export default MovieCard