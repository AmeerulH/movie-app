import React from 'react'
import { Table } from 'react-bootstrap'
import { Movies } from '../../components/Movies'
import '../../App.css'
import { movie } from '../../components/movie'

interface movie { // id, original_title, overview, popularity, poster_path, vote_average
    id: number;
    title: string;
    body: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    release_date: string;
}

const Tables = () => {
    const movies: movie[] = Movies()
    console.log(movies)

    return (
        <div className="table-container">
            <Table striped bordered hover variant="dark" responsive>
                <thead>
                    <tr>
                        <th data-sortable="true">Title</th>
                        <th>Popularity</th>
                        <th>Voting Average</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((item, index) => (
                        <tr key={index}>
                            <td>{item.title}</td>
                            <td>{item.popularity}</td>
                            <td>{item.vote_average}</td>
                            <td>{item.release_date}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Tables
