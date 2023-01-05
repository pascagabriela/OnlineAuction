import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol, MDBContainer, MDBBtn, MDBTypography
} from 'mdb-react-ui-kit';
import AppNavbar from "../AppNavbar";
import Footer from "../Footer";

class ProductDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
             product: [],
            products: []
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`/home/products/${id}`)
            .then(response => response.json())
            .then(product => this.setState({ product }));
        fetch('/home/products')
            .then(response => response.json())
            .then(products => this.setState({ products }));
    }

    render() {
        const { product } = this.state;
        const { products } = this.state;
        return (
            <MDBContainer className="container-fluid">
                <AppNavbar></AppNavbar>
                <MDBRow className="mt-4">
                    <MDBCol className="col-7">
                        <MDBCardImage
                            src={`/${product.image}`} position='top' width="500px" height="500px"
                            object-fit="cover"/>
                    </MDBCol>
                    <MDBCol className="col-4 ms-lg-5">
                                            <MDBCardBody>
                                                <MDBCardTitle>{product.product_name}</MDBCardTitle>
                                                <MDBCardText>
                                                    <small className='text-muted'>Description: </small> {product.description}
                                                </MDBCardText>
                                                <MDBCardText>
                                                    <small className='text-muted'>Price: </small> {product.price} $
                                                </MDBCardText>
                                                <MDBBtn>Add to cart</MDBBtn>
                                            </MDBCardBody>

                    </MDBCol>
                </MDBRow>
                <br></br>
                <MDBTypography tag='h4'>Similar products</MDBTypography>
                <MDBTypography tag='h7' color="black-50">Recommended for you</MDBTypography>
                <br></br>
                <br></br>

                <MDBRow>
                    {products.map((products) => {
                        if (parseInt(products.type) == product.type) {
                            return <MDBCol md='3'>
                                <MDBCard key={products.id}>
                                    <MDBCardImage src={`/${products.image}`} position='top' width="100px" height="200px"
                                                  object-fit="cover"/>
                                    <MDBCardBody>
                                        <MDBCardTitle>{products.product_name}</MDBCardTitle>
                                        <MDBCardText>{products.price}$</MDBCardText>
                                        <MDBBtn href={`/home/products/${products.id}`} color="black 50">See more</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard> <br></br></MDBCol>
                        }
                    })}
                </MDBRow>
                <Footer></Footer>
            </MDBContainer>
        )
    }
}

export default withRouter(ProductDetail);