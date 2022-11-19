import { LayoutComponents } from "../../components/LayoutComponents";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Cadastro = () => {
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [cpf, setCPF] = useState("")
    const [password, setPassword] = useState("")
    const [passworddnv, setPasswordNovamente] = useState("")
    return (
        <LayoutComponents>
            <form className="conteudo-principal-escrito">

                <h1 className="conteudo-principal-escrito-subtitulo flex"> Insira suas inforçaões para se cadastrar:</h1>

                <div className="flex">
                    <input
                        placeholder="Informar nome"
                        className={nome !== "" ? 'has-val input' : 'input'}
                        type="text"
                        value={nome}
                        onChange={e => setNome(e.target.value)}/>
                </div>

                <div className="flex">
                    <input
                         placeholder="Informar sobrenome"
                        className={sobrenome !== "" ? 'has-val input' : 'input'}
                        type="text"
                        value={sobrenome}
                        onChange={e => setSobrenome(e.target.value)}/>
                </div>

                <div className="flex">           
                    <input 
                        className="input-date" 
                        type="date"/>
                </div>

                <div className="flex">
                    <input
                        placeholder="Informar e-mail"
                        className={email !== "" ? 'has-val input' : 'input'}
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className="flex">
                    <input
                        placeholder="Informar telefone"
                        className={telefone !== "" ? 'has-val input' : 'input'}
                        type="tel"
                        value={telefone}
                        onChange={e => setTelefone(e.target.value)}/>
                </div>

                <div className="flex">
                    <input
                        placeholder="Informar CPF"
                        className={cpf !== "" ? 'has-val input' : 'input'}
                        type="text"
                        maxLength={11}
                        minLength={11}
                        value={cpf}
                        onChange={e => setCPF(e.target.value)}/>
                </div>

                <div className="flex">
                    <input 
                        placeholder="Informe sua senha"
                        className={password !== "" ? 'has-val input' : 'input'}
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <div className="flex">
                    <input
                        placeholder="Informe sua senha novamente"
                        className={passworddnv !== "" ? 'has-val input' : 'input'}
                        type="password"
                        value={passworddnv}/>
                    <span className="focus-input" data-></span>
                </div>            
                
                <div className="flex">  
                    <form action="/telapassageiro">
                        <input className='login-form-btn' type="submit" value="Continuar"/>
                    </form>
                </div>               

                <div className='flex'>
                    <span className='criar-conta'>Já possui conta? </span>
                    <Link className='criar-conta-cadastro' to='/login'> Entre por aqui.</Link>
                </div>

                <footer className="rodape">
                    <p className="rodape-escrito">Developed by</p>
                    <p className="rodape-escrito-nome">Augusto Lima, Emanoel Santos, Gustavo Alves, Marcos Vinicius</p>     
                </footer>

            </form>
        </LayoutComponents>
    );
}