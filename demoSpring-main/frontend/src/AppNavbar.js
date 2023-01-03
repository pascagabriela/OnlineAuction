import React, {Component} from "react";
import {
    MDBCollapse,
    MDBContainer,
    MDBDropdown, MDBDropdownItem, MDBDropdownMenu,
    MDBDropdownToggle, MDBIcon, MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarLink
} from "mdb-react-ui-kit";

export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <MDBNavbar className="navbar navbar-light bg-light" expand='lg'>
                <MDBContainer className="container-fluid">
                    <MDBCollapse className="collapse navbar-collapse">
                        <MDBNavbarBrand tag='a' className="navbar-brand mt-2 mt-lg-0" href="/dashboard">
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
                                <MDBDropdownItem link href="/smartphones">Smartphones & accessories</MDBDropdownItem>
                                <MDBDropdownItem divider />
                                <MDBDropdownItem link href="videogames">Video games & consoles</MDBDropdownItem>
                                <MDBDropdownItem divider />
                                <MDBDropdownItem link href="/computer">Computers & tablets</MDBDropdownItem>
                                <MDBDropdownItem divider />
                                <MDBDropdownItem link href="/cameras">Cameras & photos</MDBDropdownItem>
                                <MDBDropdownItem divider />

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

                    <MDBContainer className="d-flex align-items-center">
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
        );
    }
}