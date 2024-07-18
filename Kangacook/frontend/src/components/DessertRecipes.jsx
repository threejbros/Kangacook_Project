import React, { Component } from "react";
import DessertAdd from './DessertAdd.jsx'
import DessertListContent from './DessertListContent.jsx'


export default class DessertRecipes extends Component {
    constructor(props) {
        super(props);
        this.state = { desserts: [] };

        this.createDessert = this.createDessert.bind(this);
        this.loadDessert = this.loadDessert.bind(this);
    }

    componentDidMount() {
        this.loadDessert();
    }
    
    loadDessert() {
        fetch('/api/get-desserts')
        .then(response => response.json())
        .then(data => {
            this.setState({ desserts: data });
        })
        .catch(err => console.log(err));

    }

    createDessert(dessert) {
        fetch('/api/create-plate', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dessert)
        })
        .then(response => {
            if (!response.ok) {
                const error = response.json();
                throw new Error('Network response was not ok: ' + JSON.stringify(error));
            }
            return response.json();
        })
        .then(newDessert => {
            const newDessertList = this.state.desserts.concat(newDessert);
            this.setState({desserts: newDessertList});
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <React.Fragment>
                <DessertAdd createDessert={this.createDessert}/>
                <div className="plateCard">
                    <DessertListContent desserts={this.state.desserts}/>
                </div>
            </React.Fragment>
        );
    }
}
