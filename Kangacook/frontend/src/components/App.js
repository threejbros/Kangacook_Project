import React, { Component } from "react";
import { createRoot } from 'react-dom/client';
import Home from "./Home.js";


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Home />
            </div>
        );
    }
}


const appDiv = document.getElementById("app");
createRoot(appDiv).render(<App />);

