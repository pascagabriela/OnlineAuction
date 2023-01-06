import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol, MDBContainer, MDBBtn, MDBTypography, MDBInput
} from 'mdb-react-ui-kit';
import AppNavbar from "../AppNavbar";
import Footer from "../Footer";
import {Form} from "reactstrap";

class ProductDetail extends Component{
    emptyItem = {
        bid:'',
    };

    constructor(props) {
        super(props);
        this.state = {
            product: [],
            products: [],
            item: this.emptyItem
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
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

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;
        const { id } = this.props.match.params;
         //console.log("item: "+item);
        // console.log("id: "+id);

        await fetch(`/authenticated/products/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // Authorization: "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({price: item.bid})
        });
        window.location.href=`/home/products/${id}`;
    }

    render() {
        const { product } = this.state;
        const { products } = this.state;
        const{ item } = this.state;
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
                        <Form onSubmit={this.handleSubmit}>
                                            <MDBCardBody>
                                                <MDBCardTitle>{product.product_name}</MDBCardTitle>
                                                <MDBCardText>
                                                    <small className='text-muted'>Description: </small> {product.description}
                                                </MDBCardText>
                                                <MDBCardText>
                                                    <small className='text-muted'>Price: </small> {product.price} $
                                                </MDBCardText>
                                                <br/>
                                                <small className='text-muted'>Don't bid more money than you have.</small>
                                                <br/>
                                                <small className='text-muted'>If your price is the biggest, you win.</small>
                                                <br/><br/>
                                                <MDBInput value={item.bid}
                                                          onChange={this.handleChange} name="bid" id="bid" label="Enter your price here"></MDBInput>
                                                <br/>
                                                <MDBBtn type="submit" value="submit" >Place a bid</MDBBtn>
                                            </MDBCardBody>
                        </Form>
                    </MDBCol>
                </MDBRow>
                <br></br>
                <MDBTypography tag='h4'>Similar products</MDBTypography>
                <MDBTypography tag='h5' color="black-50">Recommended for you</MDBTypography>
                <br></br>
                <br></br>

                <MDBRow>
                    {products.map((products) => {
                        if (parseInt(products.type) == product.type) {
                            if(products.id == product.id){
                            }else{
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
                        }
                    })}
                </MDBRow>
                <Footer></Footer>
            </MDBContainer>
        )
    }
}

export default withRouter(ProductDetail);