import React, {Component} from 'react';
import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBRow} from 'mdb-react-ui-kit';
import Footer from "../Footer";
import {Form} from "reactstrap";

class Register extends Component {

    emptyItem = {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: '',
        confirmpassword:'',
    };


    constructor(props) {
        super(props);
        this.state = {
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


    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        if(item.password === item.confirmpassword){
            await fetch('/home/user_create', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item),
            });
            window.location.href = "/";
        }else{
            alert("Passwords don't match!")
        }
    }


    render() {
        const {item} = this.state;

        return (
        <MDBContainer fluid>
            <div className="p-5 bg-image" style={{
                backgroundImage: 'url(https://auctioneersoftware.s3.amazonaws.com/rol/2020/9/y2HSIvYPsbk_MtdJg0UR1qdL.jpg)',
                height: '350px'
            }}></div>
            <Form onSubmit={this.handleSubmit} onClick="/">
                <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{
                    marginTop: '-100px',
                    background: 'hsla(0, 0%, 100%, 0.8)',
                    backdropFilter: 'blur(30px)'
                }}>
                    <MDBCard className='text-black'>
                        <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto '>

                            <h2 className="fw-bold mb-2 text-uppercase">Sign up</h2>
                            <p className="text-black-50 mb-5">Please fill the fields below.</p>

                            <MDBContainer fluid>
                                <MDBRow>
                                    <MDBCol>
                                        <MDBInput value={item.first_name}
                                                  onChange={this.handleChange}  wrapperClass='mb-4 mx-5 w-100' labelClass='text-black-50'
                                                  label='First name' type='text' id="first_name" name="first_name" size="lg" required/>
                                    </MDBCol>
                                    <MDBCol>
                                        <MDBInput value={item.last_name}
                                                  onChange={this.handleChange} wrapperClass='mb-4 mx-5 w-100' labelClass='text-black-50'
                                                  label='Last name' type='text' id="last_name" name="last_name" size="lg" required/>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol>
                                        <MDBInput value={item.email}
                                                  onChange={this.handleChange}  wrapperClass='mb-4 mx-5 w-100' labelClass='text-black-50'
                                                  label='Email address' id='email' name='email' type='email' size="lg" required/>
                                    </MDBCol>
                                    <MDBCol>
                                        <MDBInput value={item.phone}
                                                  onChange={this.handleChange}  wrapperClass='mb-4 mx-5 w-100' labelClass='text-black-50'
                                                  label='Phone number' id='phone' name='phone' size="lg" required/>
                                    </MDBCol>
                                </MDBRow>
                                <MDBInput value={item.password}
                                          onChange={this.handleChange}  wrapperClass='mb-4 mx-5 w-100' labelClass='text-black-50' label='Password'
                                          id='password' name='password' type='password' size="lg" required/>
                                <MDBInput value={item.confirmpassword}
                                          onChange={this.handleChange}  wrapperClass='mb-4 mx-5 w-100' labelClass='text-black-50'
                                          label='Confirm password'  id='ConfirmPassword' name='confirmpassword' type='password' size="lg" required/>
                            </MDBContainer>
                            <MDBBtn type="submit" value="submit" outline className='mx-2 px-5 text-blue' size='lg'>
                                Sign up
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCard>
            </Form>
            <Footer></Footer>
        </MDBContainer>
    );
    }
}


export default Register;
