import { LayoutSemLoginCadastro } from '../../components/LayoutSemLoginCadastro';
import usuario from '../../assets/usuario.png';

export const TelaMotorista = () => {
  return (
    <LayoutSemLoginCadastro>

        <div className='conteudo-principal-escrito-subtitulo'>Área Motorista</div>   

        <div className='container-passageiro'>
            <div className='center-passageiro'>

                <div className='match-passageiro'>

                    <ul>
                        <li className='match-li-passageiro'><span><img src={usuario} alt="usuario" height="139px"/></span></li>
                        <li className='match-li-passageiro'><span><img src={usuario} alt="usuario" height="139px"/></span></li>
                        <li className='match-li-passageiro'><span><img src={usuario} alt="usuario" height="139px"/></span></li>
                        <li className='match-li-passageiro'><span><img src={usuario} alt="usuario" height="139px"/></span></li>
                        <li className='match-li-passageiro'><span><img src={usuario} alt="usuario" height="139px"/></span></li>
                        <li className='match-li-passageiro'><span><img src={usuario} alt="usuario" height="139px"/></span></li>
                        <li className='match-li-passageiro'><span><img src={usuario} alt="usuario" height="139px"/></span></li>
                        <li className='match-li-passageiro'><span><img src={usuario} alt="usuario" height="139px"/></span></li>
                    </ul>
                </div>

                <div className='center_button-passageiro'>
                    <form action="/passageiro">
                        <input className='login-form-btn' type="submit" value="Pesquisar"/>
                    </form>
                    <form action="/chat">
                        <input className='login-form-btn' type="submit" value="Chats"/>
                    </form>
                </div>
            </div>
        </div>

    </LayoutSemLoginCadastro>
  );
}