import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import {
    MDBContainer,
    MDBCarousel,
    MDBCarouselItem,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBBtn,
    MDBRow,
    MDBCol,
    MDBTypography, MDBCardText
} from 'mdb-react-ui-kit';

import AppNavbar from '../AppNavbar';
import Footer from '../Footer';
import {Link} from "react-router-dom";

class  Dashboard extends Component{
    constructor(props) {
        super(props);
        this.state = {products: []};
    }

    componentDidMount() {
        fetch('/home/products')
            .then(response => response.json())
            .then(data => this.setState({products: data}));
    }

    render() {
        const {products} = this.state;
        return (
            <MDBContainer className="container-fluid">
                <AppNavbar></AppNavbar>
                <MDBCarousel showControls delay={3000}>
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={1}
                        src='https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg'
                    />
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={2}
                        src='https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg'
                    />
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={3}
                        src='https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg'
                    />
                </MDBCarousel>

                <br></br>
                <MDBTypography tag='h4'>Daily Deals</MDBTypography>
                <MDBTypography tag='h7' color="black-50">Recommended for you</MDBTypography>
                <br></br>
                <br></br>

                <MDBRow>
                    {products.map((product) => {
                        if (parseInt(product.price) < 420) {
                            return <MDBCol md='3'>
                                <MDBCard key={product.id}>
                                    <MDBCardImage src={product.image} position='top' width="100px" height="200px"
                                                  object-fit="cover"/>
                                    <MDBCardBody>
                                        <MDBCardTitle>{product.product_name}</MDBCardTitle>
                                        <MDBCardText>{product.price}$</MDBCardText>
                                        <MDBBtn color="black 50"><Link to={`/home/products/${product.id}`}>See more</Link></MDBBtn>
                                    </MDBCardBody>
                                </MDBCard> <br></br></MDBCol>
                        }
                    })}
                </MDBRow>
                <br></br>
                <br></br>
                <MDBTypography tag='h4'>Explore the newest products</MDBTypography>
                <br></br>

                <MDBRow>
                    {products.filter(product => product.product_name.includes('l')).map((product) => {
                        return <MDBCol md='3' key={product.id}>
                            <MDBCard>
                                <MDBCardImage src={product.image} position='top' width="100px" height="200px"
                                              object-fit="cover"/>
                                <MDBCardBody>
                                    <MDBCardTitle>{product.product_name}</MDBCardTitle>
                                    <MDBCardText>{product.price}</MDBCardText>
                                    <MDBBtn link href={`/home/products/${product.id}`} color="black 50">See more</MDBBtn>
                                </MDBCardBody>
                            </MDBCard> <br></br></MDBCol>
                    })}
                </MDBRow>

                <Footer></Footer>
            </MDBContainer>
        );
    }
}

export default withRouter(Dashboard);