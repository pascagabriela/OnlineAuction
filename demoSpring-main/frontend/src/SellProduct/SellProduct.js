import React, {Component} from 'react';
import {
    MDBCard,
    MDBContainer,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBListGroup,
    MDBListGroupItem, MDBRow, MDBCol, MDBInput, MDBTextArea, MDBCardText, MDBBtn
}
    from 'mdb-react-ui-kit';
import Footer from "../Footer";
import AppNavbar from "../AppNavbar";
import {Form} from "reactstrap";

class SellProduct extends Component{
    emptyItem = {
        product_name: '',
        price: '',
        description: '',
        image: '',
        type: '',
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem,
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

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

            await fetch('authenticated/product_create', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + localStorage.getItem("jwt")
                },
                body: JSON.stringify(item),
            }).then((response)=>response.text()).then((result)=>{
                    if(result=="Product created"){
                        alert("Product added successfully!");
                    }else{
                        alert("Something went wrong!");
                    }
            });
    }

    render() {
        const {item} = this.state;

        return (
            <MDBContainer fluid>
                <AppNavbar></AppNavbar>
                <Form onSubmit={this.handleSubmit}>
                <MDBRow className="mt-4">
                    <MDBCol className="col-7">
                        <MDBCardImage position='top' alt='...' height='500px' src='sell.jpg' />
                    </MDBCol>
                    <MDBCol className="col-5">
                            <MDBCardBody>
                                <MDBCardTitle>Please fill the fields below</MDBCardTitle>
                            </MDBCardBody>
                                    <MDBInput value={item.product_name}
                                              onChange={this.handleChange} label='Product name'
                                              name='product_name' id='product_name' type='text' size='lg' />
                        <br/>
                                    <MDBTextArea value={item.description}
                                                 onChange={this.handleChange}
                                                 label='Description' name='description' id='description' rows={4} />
                        <br/>
                                    <MDBInput value={item.price}
                                              onChange={this.handleChange}
                                              label='Price' name='price' id='price' type='text' size='lg' />
                        <br/>
                                    <label for="image" class="form-label">Product image</label>
                                    <input value={item.image} onChange={this.handleChange}
                                           class="form-control form-control-lg" name="image" id="image" type="file" />
                            <MDBCardBody className="d-flex">
                                <MDBCol className="col-4">
                                        <select className="form-lg-select text-muted"  value={item.type}
                                                onChange={this.handleChange}
                                                aria-label="Product type" name="type" id="type">
                                            <option selected >Product type</option>
                                            <option value="11">Smartphones & accessories</option>
                                            <option value="12">Video games & consoles</option>
                                            <option value="13">Computers & tablets</option>
                                            <option value="14">Cameras & photos</option>
                                        </select>
                                </MDBCol>
                                <MDBCol className="col-4"></MDBCol>
                                <MDBCol className="col-4">
                                    <MDBBtn type="submit" value="submit"  className="ms-3">Add for sell</MDBBtn>
                                </MDBCol>
                            </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </Form>
                <Footer></Footer>
            </MDBContainer>

        );
    }
}

export default SellProduct;
