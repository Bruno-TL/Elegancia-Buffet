import {BrowserRouter,Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Headers from "../components/Headers";
import Contato from "../pages/Contato";
import Infantil from "../pages/Infantil";
import Casamento from "../pages/Casamento";
import Debutante from "../pages/Debutante";
import Outros from "../pages/Outros";


export default function Routers() {
    return (
        <BrowserRouter>
            <Headers/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/contato" element={<Contato/>}/>
                    <Route path="/infantil" element={<Infantil/>}/>
                    <Route path="/casamento" element={<Casamento/>}/>
                    <Route path="/debutante" element={<Debutante/>}/>
                    <Route path="/outros" element={<Outros/>}/>
                </Routes>
        </BrowserRouter>
    );
}