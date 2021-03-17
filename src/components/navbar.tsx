import { IconButton } from "@material-ui/core"
import * as MDIcons from "react-icons/md"
import { LinkContainer } from 'react-router-bootstrap'

const navbar = () => {

    return (
        <div className="navCustom">
            <LinkContainer to='/'>
                <IconButton edge="end">
                    <MDIcons.MdLocalMovies className="icon"/>
                </IconButton> 
            </LinkContainer>
        </div>
    )
}

export default navbar
