import React, {useEffect, useState} from 'react';
import AppNavbar from "../../AppNavbar";
import Footer from "../../Footer";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCardTitle, MDBCol,
    MDBContainer,
    MDBRow
} from "mdb-react-ui-kit";

const Computer = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {

        fetch("http://localhost:8080/products")
            .then((response) => response.json())
            .then((data) => setProduct(data));

    },[])

    return (
        <>
            <AppNavbar></AppNavbar>
            <MDBContainer className="container-fluid">
                <MDBRow>
                    {product.map((product) => {
                        if (product.type === 13) {
                            return <MDBCol md='3'>
                                <MDBCard>
                                    <MDBCardImage key={product.id} src={product.image} position='top' width="100px" height="200px" object-fit="cover"/>
                                    <MDBCardBody>
                                        <MDBCardTitle key={product.id}>{product.product_name}</MDBCardTitle>
                                        <MDBCardText key={product.id}>{product.description}</MDBCardText>
                                        <MDBBtn href='#' color="black 50">See more</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard> <br></br></MDBCol>
                        }
                    })}
                </MDBRow>
            </MDBContainer>
            <Footer></Footer>
        </>
    );
}

export default Computer;