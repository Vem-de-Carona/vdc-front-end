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

            <form className="cadastro-form">

                <span className="cadastro-title"> Insira sua CNH e os dados do carro:</span>

                <div className="wrap-input">
                <input
                        className={cnh !== "" ? 'has-val input' : 'input'}
                        type="text"
                        maxLength={11}
                        minLength={11}
                        value={cnh}
                        onChange={e => setCNH(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="CNH"></span>
                </div>

                <div className="wrap-input">
                <input
                        className={marca !== "" ? 'has-val input' : 'input'}
                        type="text"
                        value={marca}
                        onChange={e => setMarca(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Marca"></span>
                </div>

                <div className="wrap-input">
                <input
                        className={modelo !== "" ? 'has-val input' : 'input'}
                        type="text"
                        value={modelo}
                        onChange={e => setModelo(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Modelo"></span>
                </div>

                <div className="wrap-input">
                <input
                        className={ano !== "" ? 'has-val input' : 'input'}
                        type="text"
                        maxLength={4}
                        minLength={4}
                        value={ano}
                        onChange={e => setAno(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Ano"></span>
                </div>

                <div className="wrap-input">
                <input
                        className={placa !== "" ? 'has-val input' : 'input'}
                        type="text"
                        value={placa}
                        onChange={e => setPlaca(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Placa"></span>
                </div>

                <span className="qtd_carona"> Carona para até quantas pessoas?</span>

                <select className="select-pessoas" name="select">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>

                <form action="/cadastro-endereco">
                    <input className='cadastro-form-btn' type="submit" value="Continuar"/>
                </form>

                <div className='text-entrar-conta'>
                    <span className='txt1'>Esqueceu de alguma informação? </span>
                    <Link className='txt2' to='/cadastro'> Clique aqui.</Link>
                </div>

            </form>
            
        </LayoutSemLoginCadastro>
    )

}