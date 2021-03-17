import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Movies = () => {
    const API_KEY = '328c283cd27bd1877d9080ccb1604c91';

    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const response = await axios
            .get(url)
            .catch((err) => console.log("Error: ", err));

        if(response && response.data) setMovies(response.data.results)
    }

    // Will only run once, unless the movie api changes
    useEffect(() => {
        getMovies();
    }, [url])

    return movies;
}
