import React, { Component } from "react";
import EntreeAdd from './EntreeAdd.jsx'
import EntreeListContent from './EntreeListContent.jsx'


export default class EntreeRecipes extends Component {
    constructor(props) {
        super(props);
        this.state = { entrees: [] };

        this.createEntree = this.createEntree.bind(this);
        this.loadEntrees = this.loadEntrees.bind(this);
    }

    componentDidMount() {
        this.loadEntrees();
    }
    
    loadEntrees() {
        fetch('/api/get-entrees')
        .then(response => response.json())
        .then(data => {
            this.setState({ entrees: data });
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
            const newEntreeList = this.state.entrees.concat(newEntree);
            this.setState({entrees: newEntreeList});
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <React.Fragment>
                <EntreeAdd createEntree={this.createEntree}/>
                <div className="plateCard">
                    <EntreeListContent entrees={this.state.entrees}/>
                </div>
            </React.Fragment>
        );
    }
}
