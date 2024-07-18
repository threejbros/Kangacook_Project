import React, { Component } from "react";
import { createRoot } from 'react-dom/client';
import Home from "./Home.jsx";


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Home />;
        // return (
        //     <div>
        //         <Home />
        //     </div>
        // );
    }
}


const appDiv = document.getElementById("app");
createRoot(appDiv).render(<App />);

