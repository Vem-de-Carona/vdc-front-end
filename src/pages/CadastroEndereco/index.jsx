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
            <form className="conteudo-principal-escrito">

                <span className="conteudo-principal-escrito-subtitulo flex"> Insira os dados do seu endereço:</span>
                
                <div className="flex">
                    <input
                        placeholder="Rua"
                        className={rua !== "" ? 'has-val input' : 'input'}
                        type="text"
                        value={rua}
                        onChange={e => setRua(e.target.value)}/>
                </div>

                <div className="flex">
                    <input
                        placeholder="Número"
                        className={numero !== "" ? 'has-val input' : 'input'}
                        type="text"
                        value={numero}
                        onChange={e => setNumero(e.target.value)}/>
                </div>

                <div className="flex">
                    <input
                        placeholder="Complemento"
                        className={complemento !== "" ? 'has-val input' : 'input'}
                        type="text"
                        value={complemento}
                        onChange={e => setComplemento(e.target.value)}/>
                </div>

                <div className="flex">
                    <input
                        placeholder="CEP"
                        className={cep !== "" ? 'has-val input' : 'input'}
                        type="text"
                        value={cep}
                        onChange={e => setCEP(e.target.value)}/>
                </div>

                <div className="flex">
                    <input
                        placeholder="Bairro"
                        className={bairro !== "" ? 'has-val input' : 'input'}
                        type="text"
                        value={bairro}
                        onChange={e => setBairro(e.target.value)}/>
                </div>

                <div className="flex">
                    <input
                        placeholder="Cidade"
                        className={cidade !== "" ? 'has-val input' : 'input'}
                        type="text"
                        value={cidade}
                        onChange={e => setCidade(e.target.value)}/>
                </div>

                <div className="flex">
                    <input
                        placeholder="Estado"
                        className={estado !== "" ? 'has-val input' : 'input'}
                        type="text"
                        value={estado}
                        onChange={e => setEstado(e.target.value)}/>
                </div>

                <div className="flex">
                    <form action="/tela_usuario"> 
                        <input className='login-form-btn' type="submit" value="Cadastrar endereço"/>
                    </form>
                </div>

                <div className='flex'>
                    <span className='criar-conta'>Esqueceu de alguma informação? </span>
                    <Link className='criar-conta-cadastro' to='/cadastro'> Clique aqui.</Link>
                </div>

                <footer className="rodape">
                    <p className="rodape-escrito">Developed by</p>
                    <p className="rodape-escrito-nome">Augusto Lima, Emanoel Santos, Gustavo Alves, Marcos Vinicius</p>     
                </footer>

        </form>

        </LayoutSemLoginCadastro>
    )
}