import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import SignUp from "../views/login";

export function Root() {



    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}