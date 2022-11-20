
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { PaginaInicial } from '../pages/PaginaInicial';
import { Login } from '../pages/Login';
import { Cadastro } from '../pages/Cadastro';
import { TelaUsuario } from '../pages/TelaUsuario';
import { CadastroEndereco } from '../pages/CadastroEndereco';
import { TelaMotorista } from '../pages/TelaMotorista';
import { CadastroCarro } from '../pages/CadastroCarro';
import { Feedback } from '../pages/Feedback';

export const AppRouter = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/" exact element={<PaginaInicial />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/cadastro" exact element={<Cadastro />} />
                <Route path="/tela_usuario" exact element={<TelaUsuario />} />
                <Route path="/cadastro_carro" exact element={<CadastroCarro />} />
                <Route path="/cadastro_endereco" exact element={<CadastroEndereco />} />    
                <Route path="/tela_motorista" exact element={<TelaMotorista />} />      
                <Route path="/feedback" exact element={<Feedback />} />           
            </Routes>
        </Router>
    );
}

    