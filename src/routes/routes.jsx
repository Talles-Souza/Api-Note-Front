import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import SignUp from "../views/register";
import SignIn from "../views/login"
import Home from "../views/home";
import Profile from './../views/profile';

export function Root() {



    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<SignUp />} />
                <Route path="/" element={<SignIn/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/settings/perfil" element={<Profile/>} />
            </Routes>
        </BrowserRouter>
    );
}