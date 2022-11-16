
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Login } from '../pages/Login';
import { Cadastro } from '../pages/Cadastro';
import { CadastroCarro } from '../pages/CadastroCarro';

export const AppRouter = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/login" exact element={<Login />} />
                <Route path="/cadastro" exact element={<Cadastro />} />
                <Route path="/cadastro_carro" exact element={<CadastroCarro />} />
            </Routes>
        </Router>
    );
}