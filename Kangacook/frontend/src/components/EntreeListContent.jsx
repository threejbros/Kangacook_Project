import React, { Component } from "react";
import { Button, Card } from 'react-bootstrap'

function EntreeCards(props) {
    return (
        <>
        <Card >
            <Card.Body>
                <Card.Title>{props.entree.name}</Card.Title>
                <Card.Text>
                    {props.entree.desc}<br/>
                    Time: {props.entree.time} minutes
                </Card.Text>
                <Button variant="info">See Recipe</Button>
            </Card.Body>
        </Card>
        </>
    )
}

export default class EntreeListContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const entreeCards = this.props.entrees
            .map(item => <EntreeCards key={item.name} entree={item}/>)

        return (
            <>
            <Card >
                <Card.Body className="plateCardList">
                    {entreeCards}
                </Card.Body>
            </Card>
                
            </>
            

        );
    }
}