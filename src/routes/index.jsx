
import { PaginaInicial } from '../pages/PaginaInicial';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Login } from '../pages/Login';
import { Cadastro } from '../pages/Cadastro';
import { CadastroCarro } from '../pages/CadastroCarro';
import { CadastroEndereco } from '../pages/CadastroEndereco';
import { Passageiro } from '../pages/Passageiro';

export const AppRouter = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/" exact element={<PaginaInicial />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/cadastro" exact element={<Cadastro />} />
                <Route path="/cadastro_carro" exact element={<CadastroCarro />} />
                <Route path="/cadastro_endereco" exact element={<CadastroEndereco />} />
                <Route path="/passageiro" exact element={<Passageiro />} />
            </Routes>
        </Router>
    );
}