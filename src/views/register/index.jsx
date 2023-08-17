import React, { useState } from 'react';
import './style.css'
import { useNavigate } from "react-router-dom";
import logo from '../../assets/register/logo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import { useFormik } from "formik";
import { Register } from '../../service/api/register';
import { toast } from 'react-toastify';


function SignUp() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    };

    const handleRegister = async (e) => {

        e.preventDefault();
        const response = await Register(formik.values.nameCompleted, formik.values.email, formik.values.password, formik.values.linkedin, formik.values.github);
        if (!response) {
            toast.error
        } else {
            toast.success("Cadastro realizado com sucesso");
            console.log("aqui")
        }
    }

    const formik = useFormik({
        initialValues: {
            nameCompleted: "",
            email: "",
            password: "",
            linkedin: "",
            github: ""
        },
        validationSchema: yup.object({
            nameCompleted: yup.string().required("required!").matches(/[A-Z]+/g, "name invalid."),
            email: yup.string().required("required!").email("email invalid!"),
            password: yup.string().required("required!").min(6, "6 to 10 characters.").max(10, "6 to 10 characters."),
        }),
    });


    return (

        <Container className='container-global'>
            <Container className='container-sign-up'>
                <Row className='first-row'>
                    <Col className='top-col'>
                        <img src={logo} alt="" />
                        Welcome
                    </Col>
                </Row>

                <form className='form-container' onSubmit={formik.handleSubmit}>
                    <Row className='form-row'>
                        <Col className='form-col'>
                            <TextField sx={{ m: 1, width: '100%' }}
                                id="standard-required"
                                name="nameCompleted"
                                label="Name"
                                type="text"
                                variant="standard"
                                //helperText="use upper case"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.nameCompleted}
                            />
                            {formik.errors.nameCompleted && formik.touched.nameCompleted ? (
                                <div className='error'>{formik.errors.nameCompleted}</div>
                            ) : null}

                            <TextField sx={{ m: 1, width: '100%' }}
                                id="standard-required"
                                name="email"
                                label="Email"
                                variant="standard"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.errors.email && formik.touched.email ? (
                                <div className='error'>{formik.errors.email}</div>
                            ) : null}

                            <TextField sx={{ m: 1, width: '100%' }}
                                id="standard-required"
                                name='password'
                                label="Password"
                                type="password"
                                variant="standard"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.errors.password && formik.touched.password ? (
                                <div className='error'>{formik.errors.password}</div>
                            ) : null}

                            <TextField sx={{ m: 1, width: '100%' }}
                                //id="standard-required"
                                name="linkedin"
                                label="Linkedin"
                                variant="standard"
                                helperText="optional"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.linkedin}
                            />

                            <TextField sx={{ m: 1, width: '100%' }}
                                //id="standard-required"
                                name="github"
                                label="GitHub"
                                variant="standard"
                                helperText="optional"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.github}
                            />

                        </Col>
                    </Row>
                </form>
                <Row className='third-row'>
                    <Col className='bottom-col'>
                        <button className="signUp-btn" type="submit" onClick={(e) => handleRegister(e)}>Create Account</button>
                        <div className='text-sign-in'>already has an account?
                            <div className='signIn-btn' onClick={() => { handleClick() }}>Sign in</div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </Container >

    );
}

export default SignUp;