import jwtDecode from "jwt-decode";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../api/connection";
import {Login} from "../api/login";

export const AuthenticationContext = createContext({});


export const AuthenticationProvider = ({ children }) => {

    const [user, setUser] = useState({
        id: "",
        email: "",
        name: "",
        github: "",
        linkedin: "",
        token: "",
        date: "" 
       
    });
    const [token, setToken] = useState('');
    const [auth, setAuth] = useState(false);
   
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'));
        }
        if (localStorage.getItem('user')) {
            setUser(JSON.parse(localStorage.getItem('user')));
        }

    }, [])


    const login = async (email, password) => {
        const respostaServiceLogin = await Login(email, password);
        if (!respostaServiceLogin) return false;
        const { Id, Email, Name, Linkedin, GitHub, token } = respostaServiceLogin;
        setUser({
            id: Id,
            email: Email,
            name: Name,
            linkedin: Linkedin,
            github: GitHub,
            token: token,
            date: new Date().getHours()
        });
        localStorage.setItem('user', JSON.stringify({
            id: Id,
            email: Email,
            name: Name,
            linkedin: Linkedin,
            github: GitHub,
            token: token,
            date: new Date().getHours()
        }));
        setToken(respostaServiceLogin?.token)
        localStorage.setItem('token', respostaServiceLogin?.token);
        return true;
    };


    const logOut = () => {
        setToken('');
        setAuth(false);
        localStorage.clear();
        delete api.defaults.headers["Authorization"];
    }

    const isAuthenticated = async () => {
        var userLocal = JSON.parse(localStorage.getItem('user'));
        let hours = new Date().getHours()
        if (userLocal) {
            try {
                console.log(userLocal.date);
                console.log(hours + "  hora ");
                if ((userLocal.date - hours) < 2)
                    setAuth(true);
            } catch (error) {
                logOut()
                if (error.message === 'Network Error') {
                    toast.error('Erro ao realizar o login - Erro de conexão, o servidor pode estar fora do ar.');
                } else {
                    toast.error("Erro de autenticação.")
                }
                console.log(error)
            }
        }
    }

    return (
        <AuthenticationContext.Provider value={{
            login,
            logOut,
            user,
            isAuthenticated,
            auth,
            token,

        }}>
            {children}
        </AuthenticationContext.Provider>
    )
}