import { LayoutComponents } from "../../components/LayoutComponents";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import InputMask from 'react-input-mask';

export const Cadastro = () => {
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [cpf, setCPF] = useState("")
    const [password, setPassword] = useState("")
    const [passworddnv, setPasswordDnv] = useState("")
    const [dataNascimento, setDataNascimento] = useState("")
    const navigate = useNavigate();
    return (
        <LayoutComponents>
            <form className="conteudo-principal-escrito">

                <h1 className="conteudo-principal-escrito-subtitulo flex"> Insira suas informações para se cadastrar:</h1>

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
                        type="date"
                        value = {dataNascimento}
                        onChange = {e => setDataNascimento(e.target.value)}/>
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
                    <InputMask
                        placeholder="Informar telefone"
                        className={telefone !== "" ? 'has-val input' : 'input'}
                        type="tel"
                        mask="(99) 99999-9999"
                        value={telefone}
                        onChange={e => setTelefone(e.target.value)}/>
                </div>

                <div className="flex">
                    <InputMask
                        placeholder="Informar CPF"
                        className={cpf !== "" ? 'has-val input' : 'input'}
                        type="cpf"
                        mask="999.999.999-99"
                        value={cpf}
                        onChange={e => setCPF(e.target.value)}/>
                </div>

                <div className="flex">
                    <input
                        placeholder="Informe sua senha"
                        className={password !== "" ? 'has-val input' : 'input'}
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}/>
                </div>

                <div className="flex">
                    <input
                        placeholder="Informe sua senha novamente"
                        className={passworddnv !== "" ? 'has-val input' : 'input'}
                        type="password"
                        value={passworddnv}
                        onChange={e => setPasswordDnv(e.target.value)}/>
                    <span className="focus-input" data-></span>
                </div>

                <div className="flex">
                    <form>
                        <input className='cadastro-form-btn' type="submit" value="Continuar"
                        onClick = {
                            async e => {
                                
                                e.preventDefault();
                                const resp = await fetch("/signUp/user", {
                                    method: "POST",
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        cpf: cpf,
                                        name: nome,
                                        surname: sobrenome,
                                        birthDate: dataNascimento,
                                        email: email,
                                        phone: telefone,
                                        password: password
                                    })
                                });
                                if (resp === 201){
                                    navigate('/telapassageiro')
                                }
                                const content = await resp.json();
                                console.log(content);  
                        }}/>
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