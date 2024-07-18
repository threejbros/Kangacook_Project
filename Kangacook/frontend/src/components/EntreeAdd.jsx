import React, { Component } from "react";;
import { Button, Container, Row, Col, Modal } from 'react-bootstrap'

export default class EntreeAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        };
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleHideModal = this.handleHideModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleShowModal() {
        this.setState({
            modalVisible: true
        });
    }

    handleHideModal() {
        this.setState({
            modalVisible: false
        });
    }

    handleSubmit() {
        const form = document.forms.entreeAdd;
        const entree = {
            name: form.name.value,
            desc: form.desc.value,
            ingredients: form.ingredients.value,
            time: form.time.value,
            instructions: form.instructions.value,
            img: form.img.value,
            type: "entree"
        };
        this.props.createEntree(entree);
        form.name.value = '';
        form.desc.value = '';
        form.ingredients.value = '';
        form.time.value = '';
        form.instructionsvalue = '';
        form.img.value = '';
        this.setState({
            modalVisible: false
        });
    }

    render() {
        return (
            <>
                <div className="addEntree">
                    <Button variant='primary' size="sm" onClick={this.handleShowModal}>
                        Add New Entree
                    </Button>
                    <Modal show={this.state.modalVisible} onHide={this.handleHideModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add New Entree:</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Container fluid>
                                <form name="entreeAdd">
                                    <Row>
                                        <Col md={12}><b>Name: </b></Col>
                                        <Col md="auto"><input type="text" name="name" required/></Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}><b>Description: </b></Col>
                                        <Col md="auto"><textarea type="text" cols={50} name="desc" required/></Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}><b>Ingredients: </b></Col>
                                        <Col md="auto"><textarea cols={50} type="text" name="ingredients" required/></Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}><b>Time (min):</b></Col>
                                        <Col md="auto"><input type="number" name="time" maxLength={3} required/></Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}><b>Instructions: </b></Col>
                                        <Col md="auto"><textarea type="text" cols={50} name="instructions" required/></Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}><b>Image: </b></Col>
                                        <Col md="auto"><input type="text" name="img"/></Col>
                                    </Row>
                                </form>
                            </Container>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type="submit" variant="success" size="sm" className='mt-4' onClick={this.handleSubmit}>Submit</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </>
        )
    }
}