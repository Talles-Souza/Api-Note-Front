import * as React from 'react';
import { useState } from "react";
import "../../../views/login/style.css"
import TextField from '@mui/material/TextField';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
import {Login} from '../../../service/api/login';
import { toast } from 'react-toastify';

function TextFieldLogin() {

    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    const handleLogin = async (e) => {

        e.preventDefault();
        const response = await Login(email, passWord);
        if (!response) {
            toast.error
        } else {
            toast.success("Login realizado com sucesso");
        }
    }

    return (
        <>

            <form id='form-container' >
                <Row id='form-row'>
                    <Col id='form-col'>
                        <TextField sx={{ m: 1, width: '100%' }}
                            id="standard-required"
                            name="email"
                            label="Email"
                            variant="standard" 
                            onChange={(e) => setEmail(e.target.value)}/>

                        <TextField sx={{ m: 1, width: '100%' }}
                            id="standard-required"
                            name='passWord'
                            label="Password"
                            type="password"
                            variant="standard" 
                            onChange={(e) => setPassWord(e.target.value)}/>
                    </Col>
                </Row>
            </form>
            <Row id='third-row'>
                <Col id='bottom-col'>
                    <button id="signIn-btn" type="submit" onClick={(e) => { handleLogin(e) }}>Enter</button>
                    <div id='text-sign-up'>doesn't have an account?
                        <div id='signUp-btn' onClick={() => { handleClick() }}>Sign up</div>
                    </div>
                </Col>
            </Row>

        </>
    );

}

export default TextFieldLogin