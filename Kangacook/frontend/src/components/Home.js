import React, { Component } from "react";
import EntreeRecipes from "./EntreeRecipes.js";
import DessertRecipes from "./DessertRecipes.js" ;
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from "react-router-dom";

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path='/' element={<p>This is the home page</p>} />
                    <Route path='/Entrees' element={<EntreeRecipes />} />
                    <Route path='/Dessert' element={<DessertRecipes />} />
                </Routes>
            </Router>
        );
    }
}