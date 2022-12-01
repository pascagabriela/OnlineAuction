import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon, MDBFooter, MDBRow, MDBCol
}
    from 'mdb-react-ui-kit';

function Login() {
    return (
        <MDBContainer fluid>

            <div className="p-5 bg-image" style={{backgroundImage: 'url(https://auctioneersoftware.s3.amazonaws.com/rol/2020/9/y2HSIvYPsbk_MtdJg0UR1qdL.jpg)', height: '350px'}}></div>

            <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
                <MDBCard className='text-black' >
                    <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto '>

                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                        <p className="text-black-50 mb-5">Please enter your email and password</p>

                        <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-black-50' label='Email address' id='formControlLg' type='email' size="lg"/>
                        <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-black-50' label='Password' id='formControlLg' type='password' size="lg"/>
                        <MDBBtn outline className='mx-2 px-5 text-blue' size='lg'>
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

            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="facebook-f" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="twitter" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="google" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="instagram" />
                        </a>
                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon icon="gavel" className="me-3" />
                                    Roller auction
                                </h6>
                                <p>
                                    Envisioning a company that could bring best practices to a loosely structured industry, Dave Roller launched Roller Auctions 44 years ago. With a focus on treating people fairly, Roller Auctions has built strong relationships that translates to a best-in-class auction experience for both online and in-person auctions.
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-2'>
                                <h6 className='text-uppercase fw-bold mb-2'>Auctions</h6>
                                <a href='#!' className='text-reset'>
                                    All Auctions
                                </a>
                                <a href='#!' className='text-reset'>
                                    Past Auctions
                                </a>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-2'>
                                <MDBRow>
                                    <h6 className='text-uppercase fw-bold mb-2'>Info</h6>
                                    <a href='#!' className='text-reset'>
                                        How to buy?
                                    </a>
                                    <a href='#!' className='text-reset'>
                                        How to sell?
                                    </a>
                                </MDBRow>
                                <br></br>
                                <MDBRow>
                                    <h6 className='text-uppercase fw-bold mb-2'>About us</h6>
                                    <a href='#!' className='text-reset'>
                                        Overview
                                    </a>
                                    <a href='#!' className='text-reset'>
                                        How to sell?
                                    </a>
                                </MDBRow>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <MDBIcon icon="home" className="me-2" />
                                    7500 York Street,
                                    <br></br>
                                    Denver, Colorado 80229
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me-3" />
                                    office@rollerauction.com
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="me-3" /> 866-515-1668
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2022 Roller & Associates, Inc.
                </div>
            </MDBFooter>
        </MDBContainer>
    );
}

export default Login;
