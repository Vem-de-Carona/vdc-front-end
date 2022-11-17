import { LayoutSemLoginCadastro } from "../../components/LayoutSemLoginCadastro";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const CadastroEndereco = () => {
    const [rua, setRua] = useState("")
    const [numero, setNumero] = useState("")
    const [complemento, setComplemento] = useState("")
    const [cep, setCEP] = useState("")
    const [bairro, setBairro] = useState("")
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")

    return(
        <LayoutSemLoginCadastro>

            <form className="cadastro-form">
                <span className="cadastro-title"> Insira os dados do seu endereço:</span>
            </form>

            <div className="wrap-input">

                <input
                        className={rua !== "" ? 'has-val input' : 'input'}
                        type="text"
                        value={rua}
                        onChange={e => setRua(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Rua"></span>
            </div>

            <div className="wrap-input">

                <input
                        className={numero !== "" ? 'has-val input' : 'input'}
                        type="text"
                        value={numero}
                        onChange={e => setNumero(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Número"></span>
            </div>

            <div className="wrap-input">

                <input
                        className={complemento !== "" ? 'has-val input' : 'input'}
                        type="text"
                        value={complemento}
                        onChange={e => setComplemento(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Complemento"></span>
            </div>

            <div className="wrap-input">

                <input
                        className={cep !== "" ? 'has-val input' : 'input'}
                        type="text"
                        value={cep}
                        onChange={e => setCEP(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="CEP"></span>
            </div>

            <div className="wrap-input">

                <input
                        className={bairro !== "" ? 'has-val input' : 'input'}
                        type="text"
                        value={bairro}
                        onChange={e => setBairro(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Bairro"></span>
            </div>

            <div className="wrap-input">

                <input
                        className={cidade !== "" ? 'has-val input' : 'input'}
                        type="text"
                        value={cidade}
                        onChange={e => setCidade(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Cidade"></span>
            </div>

            <div className="wrap-input">

                <input
                        className={estado !== "" ? 'has-val input' : 'input'}
                        type="text"
                        value={estado}
                        onChange={e => setEstado(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Estado"></span>
            </div>

            <form action="/cadastro-finalizado"> 
                    <input className='cadastro-form-btn' type="submit" value="Cadastrar-se"/>
                </form>

                <div className='text-entrar-conta'>
                    <span className='txt1'>Esqueceu de alguma informação? </span>
                    <Link className='txt2' to='/cadastro'> Clique aqui.</Link>
                </div>

        </LayoutSemLoginCadastro>
    )
}