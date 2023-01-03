import React, {Component} from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import Footer from "../Footer";
import {Form} from "reactstrap";

class Login extends Component{
    emptyItem = {
        email: '',
        password: '',
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

    handleSubmit(event) {
        event.preventDefault();
        const {user, setUser} = this.state;
        fetch("http://localhost:8080/login")
            .then((response) => response.json())
            .then((data) => console.log(data));
    }


    render() {
        const {item} = this.state;
        return (
            <MDBContainer fluid>
        <Form onSubmit={this.handleSubmit}>
                <div className="p-5 bg-image" style={{backgroundImage: 'url(https://auctioneersoftware.s3.amazonaws.com/rol/2020/9/y2HSIvYPsbk_MtdJg0UR1qdL.jpg)', height: '350px'}}></div>

                <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
                    <MDBCard className='text-black' >
                        <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto '>

                            <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                            <p className="text-black-50 mb-5">Please enter your email and password</p>

                            <MDBInput name={item.email} onChange={this.handleChange} wrapperClass='mb-4 mx-5 w-100' labelClass='text-black-50' label='Email address' id='formControlLg1' type='email' size="lg"/>
                            <MDBInput name={item.password} onChange={this.handleChange} wrapperClass='mb-4 mx-5 w-100' labelClass='text-black-50' label='Password' id='formControlLg2' type='password' size="lg"/>
                            <MDBBtn outline className='mx-2 px-5 text-blue' size='lg' type="submit">
                                Login
                            </MDBBtn>

                            <div>
                                <p className="mb-0 mt-4 text-black-50">Don't have an account? <a href="/register" class="text-blue fw-bold">Sign Up</a></p>
                            </div>
                            <p className="small mt-2 pb-lg-2"><a className="text-blue my-0" href="frontend/src/Home/Home#!">Forgot password?</a></p>
                            <div className='d-flex flex-row mb-3 my-0'>
                                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'royalblue' }}>
                                    <MDBIcon fab icon='facebook-f' size="lg"/>
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'deepskyblue' }}>
                                    <MDBIcon fab icon='twitter' size="lg"/>
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'indianred' }}>
                                    <MDBIcon fab icon='google' size="lg"/>
                                </MDBBtn>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCard>

                <Footer></Footer>
        </Form>
            </MDBContainer>

        );
    }
}

export default Login;
