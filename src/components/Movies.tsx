import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Movies = () => {
    const API_KEY = '328c283cd27bd1877d9080ccb1604c91';

    // set base url to the web api
    const api = axios.create({
        baseURL: "http://api.themoviedb.org/3"
    })

    const url = `http://api.themoviedb.org/3/discover/movie?api_key=328c283cd27bd1877d9080ccb1604c91&primary_release_date.lte=2016-12-31&sort_by=release_date.desc&page=1`
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
