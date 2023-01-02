import {BrowserRouter,Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Headers from "../components/Headers";
import Contato from "../pages/Contato";

export default function Routers() {
    return (
        <BrowserRouter>
            <Headers/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/contato" element={<Contato/>}/>
                </Routes>
        </BrowserRouter>
    );
}