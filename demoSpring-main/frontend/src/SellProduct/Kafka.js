import React, {Component, useEffect, useState} from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow
} from "mdb-react-ui-kit";
import {Form} from "reactstrap";

class Kafka extends Component{

    constructor(props) {
        super(props);
        this.state = {kafkaMessage:[]};
    }

    async handleSubmit(event) {
        event.preventDefault();

        fetch('http://localhost:8080/send_kafkaMessage', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({product_name:"mergi,idiotule!"}),
        }).then((response)=>response.text());

        fetch('http://localhost:8080/get_kafkaMessage')
            .then(response => response.json())
            .then(data => this.setState({kafkaMessage: data}));
    }

    render() {
        return (
                <Form onSubmit={this.handleSubmit}>
                <MDBContainer className="container-fluid">
                    <MDBRow>THE FUCKING MESSAGE: {this.state.kafkaMessage.product_name}
                    </MDBRow>
                    <MDBBtn type="submit">GET FUCKING MESSAGE</MDBBtn>
                </MDBContainer>
                </Form>
        );
    }
}

export default Kafka;
