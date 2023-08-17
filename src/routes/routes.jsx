import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import SignUp from "../views/register";
import SignIn from "../views/login"

export function Root() {



    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/login" element={<SignIn/>} />
            </Routes>
        </BrowserRouter>
    );
}