import React from "react";
import TextFieldLogin from "../../components/form/textField/index.jsx";
import logo from '../../assets/register/logo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navigate, useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
        <Container >
            oi
            <button onClick={() => (navigate("/"))}>voltar</button>
        </Container>
    );
}

export default Home;