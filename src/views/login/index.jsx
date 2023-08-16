import React from "react";
import './style.css'
import { useNavigate } from "react-router-dom";
import logo from '../../assets/register/logo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextFieldLogin from "../../components/form/textField/index.jsx";

function SignIn() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/'); 
      };

    return (

        <Container id='container-global'>
            <Container id='container-sign-in'>
                <Row id='first-row'>
                    <Col id='top-col'>
                        <img src={logo} alt="" />
                        Welcome
                    </Col>
                </Row>

                <form id='form-container' >
                    <Row id='form-row'>
                        <Col id='form-col'>
                            <TextFieldLogin/>
                        </Col>
                    </Row>
                </form>
                <Row id='third-row'>
                    <Col id='bottom-col'>
                        <button id="signIn-btn" type="submit" >Create Account</button>
                        <div id='text-sign-up'>doesn't have an account?
                            <div id='signUp-btn'onClick={() => { handleClick() }}>Sign up</div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </Container >

    );
}

export default SignIn;