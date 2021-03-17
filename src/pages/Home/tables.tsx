import { Movies } from '../../components/Movies'
import '../../App.css'
import { DataGrid } from '@material-ui/data-grid';
import { useHistory } from 'react-router-dom'
import 'aos/dist/aos.css';

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
    const history = useHistory()

    const test = (m: any) => {
        history.push(`/details/${m.id}`, m)
    }

    const columns = [
        { field: 'title', headerName: 'Movie Title', flex: 0.5 },
        { field: 'popularity', headerName: 'Popularity', flex: 0.5 },
        { field: 'vote_average', headerName: 'Voting Average', flex: 0.5 },
        { field: 'release_date', headerName: 'Release Date', flex: 0.5  }
    ];

    return (
        <div className="default">
            <div data-aos="fade-right" className='header'>
                <h1>List of available movies:</h1>
            </div>
            <div data-aos="zoom-out">
                <div style={{ width: '100%', paddingLeft: '40px', paddingRight: '40px', paddingBottom: '40px' }} >
                    <div style={{ display: 'flex', height: '100%' }}>
                        <DataGrid autoHeight className="table" rowHeight={45}
                            rows={movies} columns={columns} pageSize={10} 
                            onRowSelected={(newSelection) => {
                                test(newSelection.data)
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tables
