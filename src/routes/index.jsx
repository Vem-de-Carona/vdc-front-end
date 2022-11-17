
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Login } from '../pages/Login';
import { Cadastro } from '../pages/Cadastro';
import { CadastroCarro } from '../pages/CadastroCarro';
import { CadastroEndereco } from '../pages/CadastroEndereco';

export const AppRouter = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/login" exact element={<Login />} />
                <Route path="/cadastro" exact element={<Cadastro />} />
                <Route path="/cadastro_carro" exact element={<CadastroCarro />} />
                <Route path="/cadastro_endereco" exact element={<CadastroEndereco />} />
            </Routes>
        </Router>
    );
}