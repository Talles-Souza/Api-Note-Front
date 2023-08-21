import * as React from 'react';
import { useState,useContext } from "react";
import "../../../views/login/style.css"
import TextField from '@mui/material/TextField';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
import { Login } from '../../../service/api/login';
import { toast } from 'react-toastify';
import { AuthenticationContext } from '../../../service/context/Token';
function TextFieldLogin() {

    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/register');
    };
    const { login, user, token } = useContext(AuthenticationContext);

    const handleLogin = async () => {
        const respostaLogin = await login(email, passWord);
        if (!respostaLogin) {
            setLoadingButton(false)
        } else {
            navigate('/home');
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />

                        <TextField sx={{ m: 1, width: '100%' }}
                            id="standard-required"
                            name='passWord'
                            label="Password"
                            type="password"
                            variant="standard"
                            value={passWord}
                            onChange={(e) => setPassWord(e.target.value)} />
                    </Col>
                </Row>
            </form>
            <Row id='third-row'>
                <Col id='bottom-col'>
                    <button id="signIn-btn" type="submit" onClick={(e) => { handleLogin(e) }}>Login</button>
                    <div id='text-sign-up'>doesn't have an account?
                        <div id='signUp-btn' onClick={() => { handleClick() }}>Sign up</div>
                    </div>
                </Col>
            </Row>

        </>
    );

}

export default TextFieldLogin