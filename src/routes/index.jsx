
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Login } from '../pages/Login';
import { Cadastro } from '../pages/Cadastro';
import { Cadastro_Carro } from '../pages/Cadastro_Carro';

export const AppRouter = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/login" exact element={<Login />} />
                <Route path="/cadastro" exact element={<Cadastro />} />
                <Route path="/cadastro_carro" exact element={<Cadastro_Carro />} />
            </Routes>
        </Router>
    );
}