import React, { Component } from "react";
import EntreeAdd from './EntreeAdd.jsx'

export default class EntreeRecipes extends Component {
    constructor(props) {
        super(props);
        this.state = { plates: [] };
    }

    componentDidMount() {
        this.loadEntrees();
    }
    
    loadEntrees() {
        fetch('/api/get-entrees')
        .then(response => response.json())
        .then(data => {
            this.setState({ plates: data });
        })
        .catch(err => console.log(err));
    }

    createEntree(entree) {
        fetch('/api/create-plate', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(entree)
        })
        .then(response => {
            if (!response.ok) {
                const error = response.json();
                throw new Error('Network response was not ok: ' + JSON.stringify(error));
            }
            return response.json();
        })
        .then(newEntree => {
            // const newPlates = this.state.plates.concat(newEntree);
            // this.setState({plates: newPlates});
            // console.log('Total Number of Plates:', newPlates.length);
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <React.Fragment>
                <EntreeAdd createEntree={this.createEntree}/>
                {/* <EntreeCards /> */}
            </React.Fragment>
        );
    }
}
