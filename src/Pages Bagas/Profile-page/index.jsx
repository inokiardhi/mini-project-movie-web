import React, { useEffect, useState } from 'react';
import { Button, ListGroupItem, ListGroup, Navbar, Card, Nav, NavDropdown, Form, FormControl, Container, Row, Col, NavItem, Grid } from 'react-bootstrap'
import back_button from '../../img/back-button.png'
import '../Profile-page/index.css'
import user from '../../img/user.png'
import logo from '../../img/brand-logo.png'
import axios from 'axios';

const ProfilePage = () => {
    const USERID = localStorage.getItem('USERID');
    const Token = localStorage.getItem('Token');
    const refreshPage = ()=>{
        window.location.reload();
     }

     const [user, setUser] = useState([])

     const GetUserData = async (url) => {
         try {
             const res = await axios.get(url);
             const data = await res.data;
             setUser(data)
             //declare variable to save the data
         } catch (error) {
             console.log(error)
         }
     }
 
     useEffect(() => {
         GetUserData(`https://demovie.gabatch13.my.id/users/${USERID}
         `);
     }, [])
 
     console.log(user)

    const [state, setState] = useState({
        photo: "",
        username: "",
        email: "",
        description: ""

    })


    const add = async (e) => {
        
            await axios.put(`https://demovie.gabatch13.my.id/users/${USERID}`, state, { headers: { 'Authorization': `Bearer ${Token}` } }).then
                (alert(`Profile Updated`));refreshPage();
        
    }


    // useEffect(() => {
    //     axios.put(`https://demovie.gabatch13.my.id/movies/6106ec601f8da01a30374153/reviews/${USERID}`)
    //     try {

    //     }
    // })




    return (
        <div>
            <div className="back-header">
                <div className="back-button p-3">
                    <Navbar.Brand className="ms-4" href="/">
                        <img
                            src={back_button}
                            width="50"
                            height="50"
                            className="back d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </div>
            </div >
            <div className="Profile-page">
                <Container>
                    <Row>
                        <Col xs={2}>
                            <Card style={{ borderRadius: "10px", boxShadow: "4px 5px 1px #9E9E9E" }}>
                                <Card.Body style={{ padding: "0" }}>
                                    <div className="card-title">
                                        <h3>Setting</h3>
                                        <p>Customize profile pitcure and profile</p>
                                    </div>
                                    <div className="button-profile">
                                        <h5>Profile</h5>
                                    </div>
                                    <div className="button-profile watchlist">
                                        <h5>Delete Account</h5>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={7}>
                            <Card style={{ borderRadius: "10px", boxShadow: "4px 5px 1px #9E9E9E" }}>
                                <Card.Body style={{ padding: "0" }}>
                                    <div className="card-title">
                                        <h3>Edit Profile</h3>
                                        <p>Change profile information</p>
                                    </div>
                                    <Form style={{ padding: "1px 32px 20px 110px" }}>
                                        <Form.Group className="mb-3 d-flex" controlId="formBasicFirstName">
                                            <Form.Label style={{ width: "30%" }} >Full Name</Form.Label>
                                            <Form.Control value={state.username} onChange={(e) => setState({ ...state, username: e.target.value })} type="text" placeholder="Full Name" />
                                        </Form.Group>

                                        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                                            <Form.Label style={{ width: "30%" }}>Email address</Form.Label>
                                            <Form.Control value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })} type="email" placeholder="Enter email" />
                                        </Form.Group>

                                     

                                        <div className="button-submit">
                                            <Button style={{ width: "100px", height: "40px", marginRight: "20px" }} variant="secondary" type="reset">
                                                Cancel
                                            </Button>
                                            <Button onClick={add} style={{ width: "100px", height: "40px" }} variant="warning" type="submit">
                                                Update
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col>
                            <Card style={{ borderRadius: "10px", boxShadow: "4px 5px 1px #9E9E9E" }}>
                                <Card.Body style={{ padding: "0" }}>
                                    <div className="card-title">
                                        <h3>{user.username}</h3>
                                        <p>{user.description}</p>
                                        <p>Customize profile pitcure</p>
                                    </div>
                                    <div className="profile-pitcure">
                                        <img
                                            src={user.photo}
                                            width="200"
                                            height="200"
                                            className="d-inline-block align-top m-3"
                                            alt="React Bootstrap logo"
                                        />
                                        <div className="input-image">
                                            <Form.Group controlId="formFile" className="mb-3 ">
                                                <Form.Control type="file" />
                                            </Form.Group>
                                        </div>

                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
            <div className="footerprofile bg-secondary">
                <img
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top m-3"
                    alt="React Bootstrap logo"
                />
                <h3>deMovie</h3>
            </div>
        </div >
    );
};

export default ProfilePage;