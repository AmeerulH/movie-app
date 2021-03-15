import React from "react"
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap"
import * as MDIcons from "react-icons/md"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import detail from "../pages/detail";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import home from "../pages/home";
import App from "../App";

const navbar = () => {
    return (
        <Navbar className="navCustom" expand="lg">
            <MDIcons.MdLocalMovies style={{ color: "#05486B" }}/>
            <Navbar.Brand href="#home">Fave Cinemas</Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" >Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/Details" >Details</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                <Switch>
                    <Route exact path='/' component={home} />
                    <Route exact path='/Details' component={detail} />
                </Switch> */}
        </Navbar>
    )
}

export default navbar
