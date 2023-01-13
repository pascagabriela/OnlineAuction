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

class Profile extends Component{
    emptyItem = {
        first_name: '',
        phone: '',
    };

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            item: this.emptyItem,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch('/home/users')
            .then(response => response.json())
            .then(data => this.setState({users: data}));
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

        await fetch(`home/users/${localStorage.getItem('userId')}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        }).then((response)=>response.text()).then((result)=>{
            if(result=="User updated"){
                window.location.href="/profile"
            }else{
                alert("Something went wrong!");
            }
        });
    }

    render() {
        const {users} = this.state
        const {item} = this.state
        return (
            <MDBContainer fluid>
                <Form onSubmit={this.handleSubmit}>
                    <div className="p-5 bg-image" style={{backgroundImage: 'url(https://fontawesome.com/social/user?f=classic&s=&v=5)', height: '350px'}}></div>
                {users.map((user) => {
                    if(localStorage.getItem("email")==user.email){
                        return <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{
                            marginTop: '-100px',
                            background: 'hsla(0, 0%, 100%, 0.8)',
                            backdropFilter: 'blur(30px)'
                        }}>
                            <MDBCard key={user.id} className='text-black'>
                                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto '>

                                    <h2 className="fw-bold mb-2 text-uppercase">{user.first_name} {user.last_name}</h2>
                                    <p className="text-black-50 mb-5">Account information</p>

                                    <MDBInput value={item.first_name} onChange={this.handleChange} wrapperClass='mb-4 mx-5 w-100' labelClass='text-black-50'
                                              label={user.first_name} id='first_name' name="first_name" size="lg"/>

                                    <MDBInput value={item.phone} onChange={this.handleChange} wrapperClass='mb-4 mx-5 w-100' labelClass='text-black-50' label={user.phone}
                                              id='phone' type='phone' name="phone" size="lg"/>
                                    <MDBBtn outline className='mx-2 px-5 text-blue' size='lg' type="submit">
                                        Update profile
                                    </MDBBtn>

                                </MDBCardBody>
                            </MDBCard>
                        </MDBCard>
                    }
                })}
                </Form>
                    <Footer></Footer>
            </MDBContainer>

        );
    }
}

export default Profile;
