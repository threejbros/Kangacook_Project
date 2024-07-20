import React, { Component } from "react";
import EntreeRecipes from "./EntreeRecipes.jsx";
import DessertRecipes from "./DessertRecipes.jsx" ;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Kangacook Asian Recipes</Navbar.Brand>
            <Nav>
                <Nav.Link href="/Entrees">Entrees</Nav.Link>
                <Nav.Link href="/Dessert">Desserts</Nav.Link>
            </Nav>
            
        </Navbar>
    )
}

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <NavBar />  
                    <Routes>
                        <Route exact path='/' element={<h1 className="home">Welcome To Kangacook Asian Recipes</h1>} />
                        <Route path='/Entrees' element={<EntreeRecipes />} />
                        <Route path='/Dessert' element={<DessertRecipes />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}