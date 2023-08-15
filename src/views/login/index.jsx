import React, { useState } from 'react';
import './style.css'
import logo from '../../assets/login/logo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import { useFormik } from "formik";


function SignUp() {

    const formik = useFormik({
        initialValues: {
          nameCompleted: "",
          email: "",
          password: "",
        },
        validationSchema: yup.object({
          nameCompleted: yup.string().required("required!").matches(/[A-Z]+/g, "name invalid."),
          email: yup.string().required("required!").email("email invalid!"),
          password: yup.string().required("required!").min(6, "6 to 10 characters.").max(10, "6 to 10 characters."),
        }),
        // onSubmit: (values) => {
        //   alert(JSON.stringify(values, null, 2));
        // },
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
                    <Row className='second-row'>
                        <Col className='middle-col'>
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
                        </Col>
                    </Row>

                    <Row className='third-row'>
                        <Col className='bottom-col'>
                            <button className="signUp-btn" type="submit" onClick={() => { handleClick() }}>Create Account</button>
                            <div className='text-sign-in'>already has an account?
                                <div className='signIn-btn'>Sign in</div>
                            </div>
                        </Col>
                    </Row>
                </form>
            </Container>
        </Container >

    );
}

export default SignUp;