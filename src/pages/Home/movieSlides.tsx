import React from 'react'
import { Movies } from '../../components/Movies'
import '../../App.css'

interface movie { // id, original_title, overview, popularity, poster_path, vote_average
    id: number;
    title: string;
    body: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    release_date: string;
    backdrop_path: string;
}

const baseURL = "https://image.tmdb.org/t/p/w500/";

const movieSlides = () => {
    const movies: movie[] = Movies()

    return (
        <div className="container-fluid slide-container">
            <h1>Movies Available</h1>
            <div className="row">
                {movies.map((item, index) => (
                    <>
                        <img 
                            className="image-container d-flex justify-content-start m-2 w-25"
                            src={baseURL+item.poster_path}
                            alt='movie'
                        />
                        <div className="overlay d-flex align-items center justify content-center">
                            hello
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default movieSlides
