import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol, MDBContainer, MDBBtn, MDBTypography, MDBInput, MDBTextArea
} from 'mdb-react-ui-kit';
import AppNavbar from "../AppNavbar";
import Footer from "../Footer";
import {Form} from "reactstrap";
import {Client} from "@stomp/stompjs";

const SOCKET_URL = 'ws://localhost:8080/ws-message';

class ProductDetail extends Component{
    emptyItem = {
        bid:'',
    };

    dateStart = {
        product_name: '',
        price: '',
        description: '',
        image: '',
        type: '',
        starting: '',
    }

    constructor(props) {
        super(props);
        this.state = {
            product: [],
            products: [],
            messages: '',
            startBidding: this.dateStart,
            biddings: [],
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
            .then(date => this.setState({ product:date }));
        fetch(`/home/products/${id}`)
            .then(response => response.json())
            .then(date => this.setState({ startBidding:date }));
        fetch('/home/products')
            .then(response => response.json())
            .then(products => this.setState({ products }));
        fetch(`/home/biddings`)
            .then(response => response.json())
            .then(data => this.setState({ biddings:data }));

        let currentComponent = this;

        let onConnected = () => {
            console.log("Connected!!")
            client.subscribe(`/topic/${this.props.match.params.id}`, function (msg) {
                console.log(msg);
                if (msg.body) {
                    let jsonBody = JSON.parse(msg.body);
                    if (jsonBody.message) {
                        currentComponent.setState({ messages: jsonBody.message })
                    }
                }
            });
        }

        let onDisconnected = () => {
            console.log("Disconnected!!")
        }

        const client = new Client({
            brokerURL: SOCKET_URL,
            reconnectDelay: 1000,
            heartbeatIncoming: 1000,
            heartbeatOutgoing: 1000,
            onConnect: onConnected,
            onDisconnect: onDisconnected
        });

        client.activate();

        const parsedSavedDate = new Date(parseInt(this.state.startBidding.starting+432000000, 10));
        const parsedCurrentDate = new Date(parseInt(Date.now(), 10));

        if(parsedCurrentDate>parsedSavedDate){
            fetch('http://localhost:8080/send_kafkaMessage', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({product_name:"The bidding expired!"}),
            }).then((response)=>response.text());
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;
        const { product } = this.state;
        const { id } = this.props.match.params;

        if(parseInt(item.bid)<=parseInt(product.price)){
            alert("You must bid with a higher price!");
        }else{
            await fetch(`/authenticated/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                     Authorization: "Bearer " + localStorage.getItem("jwt")
                },
                body: JSON.stringify({price: item.bid})
            });

            await fetch(`/home/bidding_create`,{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email:localStorage.getItem("email"), price: item.bid, product_id:id})
            });
        }

        if(parseInt(item.bid)>parseInt(product.price)){
            fetch('http://localhost:8080/send', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({id:id,price:item.bid}),
            }).then((response)=>response.text());
        }

    }

    render() {
        const { product } = this.state;
        const { products } = this.state;
        const { item } = this.state;
        const {biddings} = this.state;
        const { id } = this.props.match.params;

        const parsedSavedDate = new Date(parseInt(this.state.startBidding.starting+432000000, 10));
        const parsedCurrentDate = new Date(parseInt(Date.now(), 10));

        if(this.state.messages){
            if(parsedCurrentDate>parsedSavedDate){
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
                                            <small className='text-muted'>Price: </small> {this.state.messages} $
                                        </MDBCardText>
                                        <br/>
                                        <MDBCardText>Bidding historic: </MDBCardText>
                                        {biddings.map((bidding) => {
                                            if(bidding.product_id == parseInt(id)){
                                                return <ol key={bidding.id} style={{ listStyleType: 'square' }} color="black">
                                                    <li color="black">{bidding.email} -> {bidding.price}$</li>
                                                </ol>
                                            }
                                        })}
                                        <br/>
                                        <small className='text-muted'>Don't bid more money than you have.</small>
                                        <br/>
                                        <small className='text-muted'>If your price is the biggest, you win.</small>
                                        <br/><br/>
                                        <small className='text-muted'>Ended: {parsedSavedDate.toDateString()} {parsedSavedDate.getHours()}:{parsedSavedDate.getMinutes()}</small>
                                        <br/>
                                        <MDBInput value={item.bid}
                                                  onChange={this.handleChange} name="bid" id="bid" label="Enter your price here" disabled></MDBInput>
                                        <br/>
                                        <small className='text-muted'><i>The bidding time expired.</i></small>
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
                                if (parseInt(products.type) === product.type) {
                                    if(products.id === product.id){
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
            }else{
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
                                            <small className='text-muted'>Price: </small> {this.state.messages} $
                                        </MDBCardText>
                                        <br/>
                                        <MDBCardText>Bidding historic: </MDBCardText>
                                        {biddings.map((bidding) => {
                                            if(bidding.product_id == parseInt(id)){
                                                return <ol key={bidding.id} style={{ listStyleType: 'square' }} color="black">
                                                    <li color="black">{bidding.email} -> {bidding.price}$</li>
                                                </ol>
                                            }
                                        })}
                                        <br/>
                                        <small className='text-muted'>Don't bid more money than you have.</small>
                                        <br/>
                                        <small className='text-muted'>If your price is the biggest, you win.</small>
                                        <br/><br/>
                                        <small className='text-muted'>Ends: {parsedSavedDate.toDateString()} {parsedSavedDate.getHours()}:{parsedSavedDate.getMinutes()}</small>
                                        <br/>
                                        <MDBInput value={item.bid}
                                                  onChange={this.handleChange} name="bid" id="bid" label="Enter your price here"></MDBInput>
                                        <br/>
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
                                if (parseInt(products.type) === product.type) {
                                    if(products.id === product.id){
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
        }else{
            if(parsedCurrentDate>parsedSavedDate){
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
                                        <MDBCardText>Bidding historic: </MDBCardText>
                                        {biddings.map((bidding) => {
                                            if(bidding.product_id == parseInt(id)){
                                                return <ol key={bidding.id} style={{ listStyleType: 'square' }} color="black">
                                                    <li color="black">{bidding.email} -> {bidding.price}$</li>
                                                </ol>
                                            }
                                        })}
                                        <br/>
                                        <small className='text-muted'>Don't bid more money than you have.</small>
                                        <br/>
                                        <small className='text-muted'>If your price is the biggest, you win.</small>
                                        <br/><br/>
                                        <small className='text-muted'>Ended: {parsedSavedDate.toDateString()} {parsedSavedDate.getHours()}:{parsedSavedDate.getMinutes()}</small>
                                        <br/>
                                        <MDBInput value={item.bid}
                                                  onChange={this.handleChange} name="bid" id="bid" label="Enter your price here" disabled></MDBInput>
                                        <br/>
                                        <small className='text-muted'><i>The bidding time expired.</i></small>
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
                                if (parseInt(products.type) === product.type) {
                                    if(products.id === product.id){
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
            }else{
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
                                        <MDBCardText>Bidding historic: </MDBCardText>
                                        {biddings.map((bidding) => {
                                            if(bidding.product_id == parseInt(id)){
                                                return <ol key={bidding.id} style={{ listStyleType: 'square' }} color="black">
                                                    <li color="black">{bidding.email} -> {bidding.price}$</li>
                                                </ol>
                                            }
                                        })}
                                        <br/>
                                        <small className='text-muted'>Don't bid more money than you have.</small>
                                        <br/>
                                        <small className='text-muted'>If your price is the biggest, you win.</small>
                                        <br/><br/>
                                        <small className='text-muted'>Ends: {parsedSavedDate.toDateString()} {parsedSavedDate.getHours()}:{parsedSavedDate.getMinutes()}</small>
                                        <br/>
                                        <MDBInput value={item.bid}
                                                  onChange={this.handleChange} name="bid" id="bid" label="Enter your price here"></MDBInput>
                                        <br/>
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
                                if (parseInt(products.type) === product.type) {
                                    if(products.id === product.id){
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
    }
}

export default withRouter(ProductDetail);