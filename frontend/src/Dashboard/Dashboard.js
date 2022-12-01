import React from 'react';

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBIcon,
    MDBNavbarLink,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
    MDBCarousel,
    MDBCarouselItem,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    MDBRow,
    MDBCol,
    MDBFooter,
    MDBCardLink
} from 'mdb-react-ui-kit';

function Dashboard() {
    return (
        <MDBContainer class="container-fluid">
        <MDBNavbar class="navbar navbar-expand-lg navbar-light bg-light">
            <MDBContainer class="container-fluid">
               <MDBCollapse class="collapse navbar-collapse">
                    <MDBNavbarBrand tag='a' class="navbar-brand mt-2 mt-lg-0" href="/dashboard">
                        <img
                            src="logo.png"
                            height="50"
                            alt="Logo"/>
                    </MDBNavbarBrand>
                   <MDBDropdown>
                       <MDBDropdownToggle tag='data-toggle'>
                           <MDBNavbarLink href='#'>
                               <h6 className='text-black-50'>Electronics</h6>
                           </MDBNavbarLink>
                       </MDBDropdownToggle>
                       <MDBDropdownMenu>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Smartphones & accessories</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Video games & consoles</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Computers & tablets</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Cameras & photos</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Camera drones</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Computers & tablets</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Refurbished</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Smart home</MDBDropdownItem>

                       </MDBDropdownMenu>
                   </MDBDropdown>
                   <MDBDropdown>
                       <MDBDropdownToggle tag='data-toggle'>
                           <MDBNavbarLink href='#'>
                               <h6 className='text-black-50'>Fashion</h6>
                           </MDBNavbarLink>
                       </MDBDropdownToggle>
                       <MDBDropdownMenu>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Footwear</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Women's clothing</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Footwear for women</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Men's clothing</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Men's footwear</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Watches</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Jewelry</MDBDropdownItem>
                       </MDBDropdownMenu>
                   </MDBDropdown>
                   <MDBDropdown>
                       <MDBDropdownToggle tag='data-toggle'>
                           <MDBNavbarLink href='#'>
                               <h6 className='text-black-50'>Cars</h6>
                           </MDBNavbarLink>
                       </MDBDropdownToggle>
                       <MDBDropdownMenu>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Auto & truck parts</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Tools & supplies</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Turbo charges</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Clothing & merchandise</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Shock absorbers</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Electronic & GPS</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Air intake</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Vintage pieces</MDBDropdownItem>
                       </MDBDropdownMenu>
                   </MDBDropdown>
                   <MDBDropdown>
                       <MDBDropdownToggle tag='data-toggle'>
                           <MDBNavbarLink href='#'>
                               <h6 className='text-black-50'>Collectibles & Art</h6>
                           </MDBNavbarLink>
                       </MDBDropdownToggle>
                       <MDBDropdownMenu>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Collectibles</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Art</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Action figures</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Cartoon characters</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Movie & TV characters</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Diecast</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Musical memorabila</MDBDropdownItem>
                       </MDBDropdownMenu>
                   </MDBDropdown>
                   <MDBDropdown>
                       <MDBDropdownToggle tag='data-toggle'>
                           <MDBNavbarLink href='#'>
                               <h6 className='text-black-50'>Sport</h6>
                           </MDBNavbarLink>
                       </MDBDropdownToggle>
                       <MDBDropdownMenu>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Cycling</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Fitness, running & yoga</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Fitness Tech</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Fishing</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Camping</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Scooters</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Team sports</MDBDropdownItem>
                       </MDBDropdownMenu>
                   </MDBDropdown>
                   <MDBDropdown>
                       <MDBDropdownToggle tag='data-toggle'>
                           <MDBNavbarLink href='#'>
                               <h6 className='text-black-50'>Health & Beauty</h6>
                           </MDBNavbarLink>
                       </MDBDropdownToggle>
                       <MDBDropdownMenu>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Beauty</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Makeup</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Health</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>K-Beauty</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Manicure & pedicure</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Hair products</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Skin products</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Orthopedic products</MDBDropdownItem>
                       </MDBDropdownMenu>
                   </MDBDropdown>
                   <MDBDropdown>
                       <MDBDropdownToggle tag='data-toggle'>
                           <MDBNavbarLink href='#'>
                               <h6 className='text-black-50 Helvetica'>Home & garden</h6>
                           </MDBNavbarLink>
                       </MDBDropdownToggle>
                       <MDBDropdownMenu>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Dental healthcare</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Electronic equipment & supplies</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Metallurgy & manufacturing</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Motors & industrial automation</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Heavy equipment parts</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Light industrial tools</MDBDropdownItem>
                           <MDBDropdownItem divider />
                           <MDBDropdownItem link>Inspection, measurement & testing equipment</MDBDropdownItem>
                       </MDBDropdownMenu>
                   </MDBDropdown>
                </MDBCollapse>

                <MDBContainer class="d-flex align-items-center">
                    <MDBNavbarLink href='#'>
                        <MDBIcon color='black-50' fas icon='shopping-cart'></MDBIcon>
                    </MDBNavbarLink>
                    <MDBDropdown>
                        <MDBDropdownToggle tag='data-toggle'>
                            <MDBNavbarLink href='#'>
                                <MDBIcon color='black-50' fas icon='bell'></MDBIcon>
                            </MDBNavbarLink>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem link>Notification</MDBDropdownItem>
                            <MDBDropdownItem link>Notification</MDBDropdownItem>
                            <MDBDropdownItem link>Notification</MDBDropdownItem>
                            <MDBDropdownItem link>Notification</MDBDropdownItem>
                            <MDBDropdownItem link>Notification</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                    <MDBDropdown>
                        <MDBDropdownToggle tag='data-toggle'>
                                <MDBNavbarLink href='#'>
                                    <MDBIcon color='black-50' fas icon='user'></MDBIcon>
                                </MDBNavbarLink>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem link>Profile</MDBDropdownItem>
                            <MDBDropdownItem link>Settings</MDBDropdownItem>
                            <MDBDropdownItem link>Sell products</MDBDropdownItem>
                            <MDBDropdownItem divider />
                            <MDBDropdownItem link>Log out</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBContainer>
            </MDBContainer>
        </MDBNavbar>

            <MDBCarousel showControls dealy={3000}>
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
            <MDBRow>

            </MDBRow>
            <MDBRow>

                <MDBCol md='4'>
                    <MDBCard>
                        <MDBCardImage src='https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw1e672b03/images/products/MR01-SGR_fr.jpg?sw=1660&sh=1660' position='top' width='50'/>
                        <MDBCardBody>
                            {/*<MDBCardTitle>Card title</MDBCardTitle>*/}
                            <MDBCardText>
                                <i>Exclusive</i> smartwatches <b><i>-FOR SALE-</i></b>
                            </MDBCardText>
                            <MDBBtn href='#'>See more</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md='4'>
                    <MDBCard>
                        <MDBCardImage src='https://media.wired.com/photos/6272ca8f95c3e2d8a63f2623/master/w_2400,h_1800,c_limit/Android-Phones-FairPhone4-Gear.jpg' position='top' alt='...' />
                        <MDBCardBody>
                            <MDBCardTitle>Smartphones</MDBCardTitle>
                            <MDBCardText>
                                Be up to date with new <br/> technologies in the mobile <br/>industry.
                            </MDBCardText>
                            <MDBBtn href='#'>See more</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md='4'>
                    <MDBCard>
                        <MDBCardImage src='https://i.ebayimg.com/images/g/r4IAAOSw03pimIbP/s-l400.jpg' position='top' alt='...' />
                        <MDBCardBody>
                            <MDBCardText>
                                Good <b>quality</b> games at the <b>lowest price</b>.
                            </MDBCardText>
                            <MDBBtn href='#'>See more</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>

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

export default Dashboard;