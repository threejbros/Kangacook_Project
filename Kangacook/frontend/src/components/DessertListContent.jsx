import React, { Component } from "react";
import { Button, Card } from 'react-bootstrap'

function DessertCards(props) {
    return (
        <>
        <Card >
            <Card.Body>
                <Card.Title>{props.dessert.name}</Card.Title>
                <Card.Text>
                    {props.dessert.desc}<br/>
                    Time: {props.dessert.time} minutes
                </Card.Text>
                <Button variant="info">See Recipe</Button>
            </Card.Body>
        </Card>
        </>
    )
}

export default class DessertListContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const dessertCards = this.props.desserts
            .map(item => <DessertCards key={item.name} dessert={item}/>)

        return (
            <>
            <Card >
                <Card.Body className="plateCardList">
                    {dessertCards}
                </Card.Body>
            </Card>
                
            </>
            

        );
    }
}