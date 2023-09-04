import { useState, useContext, useEffect } from "react";
import "../../../views/login/style.css"
import TextField from '@mui/material/TextField';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
import { Login } from '../../../service/api/login';
import { toast } from 'react-toastify';
import { AuthenticationContext } from '../../../service/context/Token';
import jwt_decode from 'jwt-decode';

function TextFieldLogin() {

    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/register');
    };
    const { login, setUserGoogle, token, setCheck } = useContext(AuthenticationContext);

    const handleLogin = async () => {
        const respostaLogin = await login(email, passWord);
        if (!respostaLogin) {
            setLoadingButton(false)
            toast.error("Não foi possivel realizar o login")
        } else {
            navigate('/home');
        }
    }
   
        const handleCredentialResponse = async (response) => {
          const data = jwt_decode(response.credential)
          if (data.email_verified === true) {
            console.log(data)
            const { email, name, sub, picture } = data;
            setUserGoogle({
                id: "",
                email: email,
                name: name,
                service: "",
                sub: "",
                picture: picture,
                token: "",
                date: ""
            });
            navigate('/home');
            setCheck('google')
          }
        };
        //     const responseGoogle = await loginGoogle(email, sub, name, picture);
        //     if (!responseGoogle) {
        //         toast.error("erro")
        //     } else {
        //         navigate('/home');
        //     }
        // } else {
        //     toast.error("Email inválido");
        // }
        
    
        useEffect(() => {
          google.accounts.id.initialize({
            client_id: "229925475986-k7bpu0q2eibchsfe8sp0tv9os6ou3dpk.apps.googleusercontent.com",
            callback: handleCredentialResponse
          });
      
          google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { theme: "outline", size: "large", type:"icon", shape:"square", text:"continue_with"}
           
          );
        }, []);
    

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
                    <div id="buttonDiv"></div> 
                    <div id='text-sign-up'>doesn't have an account?
                        <div id='signUp-btn' onClick={() => { handleClick() }}>Sign up</div>
                    </div>
                </Col>
            </Row>
            

        </>
    );
}

export default TextFieldLogin