import React, { useEffect, useState } from 'react'
import '../../App.css'
import { useLocation } from "react-router-dom";
import { Button, createStyles, Grid, GridList, GridListTile, isWidthUp, makeStyles, Theme, withWidth } from '@material-ui/core';
import * as BIIcons from "react-icons/bi";
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import 'aos/dist/aos.css';
import axios from 'axios';

const API_KEY = '328c283cd27bd1877d9080ccb1604c91';
const baseURL = "https://image.tmdb.org/t/p/w500/";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    }
  }),
);

interface movie {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    overview: string;
    original_language: string;
    genres: {
        id: number,
        name: string,
    };
    runtime: number;
}

interface genres {
    id: number,
    name: string,
}

const g = [{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]

const times: string[] = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00',  '22:00',]

const Detail = (props: any) => {
    const mov = useLocation<{
        id: number;
        title: string;
        poster_path: string;
        release_date: string;
        overview: string;
        original_language: string;
        genres: [{
            id: number,
            name: string,
        }];
        runtime: number;
    }>();

    const url = `https://api.themoviedb.org/3/movie/${mov.state.id}?api_key=${API_KEY}`
    const [movie, setMovie] = useState({
        ...mov.state
    });

    const getMovie = async () => {
        const response = await axios
            .get(url)
            .catch((err) => console.log("Error: ", err));

        if(response && response.data) setMovie(response.data)
    }

    useEffect(() => {
        getMovie();
    }, [url])

    let genre: genres[] = movie.genres;

    const classes = useStyles();
    const [open, setOpen] = React.useState(true)
    const closeAlert = () => setOpen(false)

    const getCols = () => {
        if (isWidthUp('md', props.width)) {
            return 12;
        }

        if (isWidthUp('sm', props.width)) {
            return 6;
        }

        if (isWidthUp('xs', props.width)) {
            return 4;
        }
    
        return 1;
    }

    return (
        <>
            <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'left' }} open={open} autoHideDuration={6000} onClose={closeAlert}>
                <Alert severity="error" onClose={closeAlert}>Click the film icon to go back!</Alert>
            </Snackbar>
            <Grid spacing={3} className='detail-container'>
                <Grid item xs={12} sm={12} md={3} className='poster-container'>
                    <img data-aos="zoom-out" src={baseURL+movie.poster_path}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid data-aos="zoom-out" className='ts-container'>
                        <h1>Title</h1>
                        <p>{movie.title}</p>
                        <h1>Synposis</h1>
                        <p>{movie.overview}</p>
                    </Grid>
                    <Grid data-aos="zoom-out"container className='gld-container'>
                        <Grid item xs={3} className='gld-grid'>
                            <h1>Genres</h1>
                            {/* {genre.map((item, index) => (
                                <p key={index}>{item.name}</p>
                            ))} */}
                        </Grid>
                        <Grid item xs={4} className='gld-grid'>
                            <h1>Language</h1>
                            <p>{movie.original_language}</p>
                        </Grid>
                        <Grid xs={4} className='gld-grid'>
                            <h1>Runtime</h1>
                            <p>{movie.runtime} minutes</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} className="times-container">
                <h1 data-aos="zoom-out">Choose Your Time Slot: </h1>
                <GridList data-aos="zoom-out" className={classes.gridList} cols={getCols()}>
                    {times.map((item, index) => (
                        <GridListTile key={index}>
                            <Button variant="contained" className="timeButton" 
                                href="https://www.cathaycineplexes.com.sg/" target="_blank">
                                    {item}  
                                    <BIIcons.BiTime />
                            </Button>
                        </GridListTile>
                    ))}
                </GridList>
            </Grid>
        </>
    )
}

export default withWidth()(Detail)
