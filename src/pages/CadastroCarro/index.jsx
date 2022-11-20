import { LayoutSemLoginCadastro } from "../../components/LayoutSemLoginCadastro";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const CadastroCarro = () => {
    const [cnh, setCNH] = useState("")
    const [marca, setMarca] = useState("")
    const [modelo, setModelo] = useState("")
    const [ano, setAno] = useState("")
    const [placa, setPlaca] = useState("")

    return(
        <LayoutSemLoginCadastro>
            <form className="conteudo-principal-escrito">

                <span className="conteudo-principal-escrito-subtitulo flex"> Insira sua CNH e os dados do carro:</span>

                <div className="flex">
                <input
                    placeholder="CNH"
                    className={cnh !== "" ? 'has-val input' : 'input'}
                    type="text"
                    maxLength={11}
                    minLength={11}
                    value={cnh}
                    onChange={e => setCNH(e.target.value)}/>
                </div>

                <div className="flex">
                <input
                    placeholder="Marca"
                    className={marca !== "" ? 'has-val input' : 'input'}
                    type="text"
                    value={marca}
                    onChange={e => setMarca(e.target.value)}/>
                </div>

                <div className="flex">
                <input
                    placeholder="Modelo"
                    className={modelo !== "" ? 'has-val input' : 'input'}
                    type="text"
                    value={modelo}
                    onChange={e => setModelo(e.target.value)}/>
                </div>

                <div className="flex">
                <input
                    placeholder="Ano"
                    className={ano !== "" ? 'has-val input' : 'input'}
                    type="text"
                    maxLength={4}
                    minLength={4}
                    value={ano}
                    onChange={e => setAno(e.target.value)}/>
                </div>

                <div className="flex">
                <input
                    placeholder="Placa"
                    className={placa !== "" ? 'has-val input' : 'input'}
                    type="text"
                    value={placa}
                    onChange={e => setPlaca(e.target.value)}/>
                </div>

                <span className="conteudo-principal-escrito-subtitulo flex"> Carona para até quantas pessoas?</span>

                <div className="flex">   
                    <select className="input select-pessoas" name="select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>

                <div className="flex">    
                    <form action="/tela_motorista">
                        <input className='login-form-btn' type="submit" value="Cadastrar carro"/>
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