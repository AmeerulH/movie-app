import { useEffect, useState } from 'react'
import axios from 'axios'

interface movie {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    overview: string;
    original_language: string;
    runtime: [
        id: string,
        name: string
    ];
    genres: string;
}

export const MovDet = (id: number) => {
    const API_KEY = '328c283cd27bd1877d9080ccb1604c91';

    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    const [movie, setMovie] = useState([]);

    const getMovie = async () => {
        const response = await axios
            .get(url)
            .catch((err) => console.log("Error: ", err));

        if(response && response.data) setMovie(response.data)
    }

    // Will only run once, unless the movie api changes
    useEffect(() => {
        getMovie();
    }, [url])

    return movie;
}
