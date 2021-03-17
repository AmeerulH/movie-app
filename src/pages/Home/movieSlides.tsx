import { Movies } from '../../components/Movies'
import '../../App.css'
import { useHistory } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

interface movie { // id, original_title, overview, popularity, poster_path, vote_average
    id: number;
    title: string;
    body: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    release_date: string;
    overview: string;
    original_language: string;
}

const baseURL = "https://image.tmdb.org/t/p/w500/";

const MovieSlides = () => {
    const movies: movie[] = Movies()
    const history = useHistory()

    useEffect(() => {
        Aos.init({ 
            duration: 1000,
            once: true,
        })
    }, [])

    const test = (m: movie) => {
        history.push(`/details/${m.id}`, m)
    }

    return (
        <div className="slide-container">
            <h1 data-aos="fade-right">Movies Available</h1>
            <div data-aos="zoom-out" className="row">
                {movies.map((item, index) => (
                    // <Link to={`/details/`}>
                    <div className="image-container d-flex justify-content-start m-2" 
                        key={index} onClick={() => test(item)}>
                        <img
                            src={baseURL+item.poster_path}
                            alt='movie'
                        />
                        <div className="overlay d-flex">
                            <p>
                                {item.title} <br/>
                                {item.vote_average} / 10
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieSlides
