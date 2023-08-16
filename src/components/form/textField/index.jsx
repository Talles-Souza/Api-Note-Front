import React from "react";
import TextField from '@mui/material/TextField';

function TextFieldLogin() {

    return (
        <>
            <TextField sx={{ m: 1, width: '100%' }}
                id="standard-required"
                name="email"
                label="Email"
                variant="standard" />

            <TextField sx={{ m: 1, width: '100%' }}
                id="standard-required"
                name='password'
                label="Password"
                type="password"
                variant="standard" />
        </>

    );

}

export default TextFieldLogin