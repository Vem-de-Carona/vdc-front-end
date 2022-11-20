
import {Link} from 'react-router-dom';
import vdcIMG from '../../assets/Logo_VDC.png';
import "../styles.css";
import botao_configuracao from '../../assets/botao_configuracao.png';

export const LayoutSemLoginCadastro = (props) => {
    return (
        <div className="container">
            <div className='header'>
                <div className='left-side'>
                    <span><img src={vdcIMG} alt="Vem de Carona" width='350px'/></span>
                </div>
               
                <div className='right-side'>
                    <nav>
                        <ul className="menu">                      
                            <li><a href="#"><img src={botao_configuracao} alt="configuracao" width='40px'/></a>
                                <ul>    
                                <   li><Link to="/tela_usuario"><p>🚶Área passageiro</p></Link></li>
                                    <li><Link to="/cadastro_endereco"><p>🚶Cadastrar endereço</p></Link></li>
                                    <li><Link to="/tela_motorista"><p>🚗 Área motorista</p></Link></li>
                                    <li><Link to="/cadastro_carro"><p>🚗 Cadastrar carro</p></Link></li>
                                    <li><Link to="/Feedback"><p>✍ Feedback</p></Link></li>
                                    <li className='sair'><Link to="/"><p>🏠 Sair</p></Link></li>
                                </ul>
                            </li>                     
                        </ul>
                    </nav>
                </div> 
            </div>

            

            <div className="container-login">

                <div className="wrap-login">
                    {props.children}
                </div>

            </div>

        </div>
    )
}