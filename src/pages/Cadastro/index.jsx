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
    const [dataNascimento, setDataNascimento] = useState("")
    return (
        <LayoutComponents>
            <form className="cadastro-form">

                <span className="cadastro-title"> Insira suas informações para se cadastrar: </span>

                <div className="wrap-input">
                    <input
                        className={nome !== "" ? 'has-val input' : 'input'}
                        type="text"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Informar nome"></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={sobrenome !== "" ? 'has-val input' : 'input'}
                        type="text"
                        value={sobrenome}
                        onChange={e => setSobrenome(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Informar sobrenome"></span>
                </div>

                <div className="dataNascimento">
                    <span> Data de nascimento: </span>
                    <input className="nascimento" type="date"
                    value = {dataNascimento}
                    onChange = {e => setDataNascimento(e.target.value)}
                    />
                </div>

                <div className="wrap-input">
                    <input
                        className={email !== "" ? 'has-val input' : 'input'}
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Informar e-mail"></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={telefone !== "" ? 'has-val input' : 'input'}
                        type="tel"
                        value={telefone}
                        onChange={e => setTelefone(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Informar telefone"></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={cpf !== "" ? 'has-val input' : 'input'}
                        type="text"
                        maxLength={11}
                        minLength={11}
                        value={cpf}
                        onChange={e => setCPF(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Informar CPF"></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={password !== "" ? 'has-val input' : 'input'}
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Informe sua senha"></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={passworddnv !== "" ? 'has-val input' : 'input'}
                        type="password"
                        value={passworddnv}
                        onChange={e => setPasswordNovamente(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Informe sua senha novamente"></span>
                </div>

                <select className="select-user" name="select">
                    <option value="valor1">Sou motorista</option>
                    <option value="valor2">Sou passageiro</option>
                </select>

                <form action="/cadastro-">
                    <input className='cadastro-form-btn' type="submit" value="Continuar"
                    onClick = {
                        async e => {
                            e.preventDefault();
                            const resp = await fetch("/signUp/passenger", {
                                method: "POST",
                                body: JSON.stringify({
                                    cpf: cpf,
                                    name: nome,
                                    surname: sobrenome,
                                    birthDate: dataNascimento,
                                    email: email,
                                    phone: telefone,
                                    password: password
                                }),
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                            });
                        }
                    }/>
                </form>

                <div className='text-entrar-conta'>
                    <span className='txt1'>Já possui conta? </span>
                    <Link className='txt2' to='/login'> Entre por aqui.</Link>
                </div>

            </form>
        </LayoutComponents>
    );
}