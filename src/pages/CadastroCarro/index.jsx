import { LayoutSemLoginCadastro } from "../../components/LayoutSemLoginCadastro";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import InputMask from 'react-input-mask';

export const CadastroCarro = () => {
    const [cnh, setCNH] = useState("")
    const [cpf, setCPF] = useState("")
    const [marca, setMarca] = useState("")
    const [modelo, setModelo] = useState("")
    const [ano, setAno] = useState("")
    const [placa, setPlaca] = useState("")

    return(
        <LayoutSemLoginCadastro>
            <form className="conteudo-principal-escrito">

                <span className="conteudo-principal-escrito-subtitulo flex"> Insira sua CNH e os dados do carro:</span>

                <div className="flex">
                <InputMask
                    placeholder="CNH"
                    className={cnh !== "" ? 'has-val input' : 'input'}
                    type="text"
                    mask="999999999"
                    maxLength={11}
                    minLength={11}
                    value={cnh}
                    onChange={e => setCNH(e.target.value)}/>
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
                <InputMask
                    placeholder="Placa"
                    className={placa !== "" ? 'has-val input' : 'input'}
                    type="text"
                    mask="aaa 9a99"
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
                <form>
                        <input className='cadastro-form-btn' type="submit" value="CADASTRAR"
                        onClick = {
                            async e => {
                                e.preventDefault();
                                const resp = await fetch("/car", {
                                    method: "POST",
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        cpf: "12345678901",
                                        cnh: cnh,
                                        brand: marca,
                                        model: modelo,
                                        year: ano,
                                        licensePlate: placa,
                                        maximumNumberOfPassengers: "4"
                                    })
                                });
                                console.log(resp.status);
                                if (resp.status === 201){
                                    window.location.href = '/telamotorista';
                                }
                        }}/>
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