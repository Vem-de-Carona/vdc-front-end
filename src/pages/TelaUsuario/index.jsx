import { LayoutSemLoginCadastro } from '../../components/LayoutSemLoginCadastro';
import usuario from '../../assets/usuario.png';

export const TelaUsuario = () => {
  return (
    <LayoutSemLoginCadastro>
        <form className="conteudo-principal-escrito">
            <div className='conteudo-principal-escrito-titulo flex'>Área Passageiro</div>   
            <div className='conteudo-principal-escrito-subtitulo flex'>Escolha um motorista para realizar a viagem</div>   
            <div className='container-passageiro'>
                <div className='center-passageiro'>
                    <div className='match-passageiro'>
                        <ul>
                            <li className='match-li-passageiro'><span><img src={usuario} alt="usuario" height="160px"/></span></li>
                            <li className='match-li-passageiro'><span><img src={usuario} alt="usuario" height="160px"/></span></li>
                            <li className='match-li-passageiro'><span><img src={usuario} alt="usuario" height="160px"/></span></li>
                        </ul>
                        <ul>
                            <li className='match-li-passageiro'><span><img src={usuario} alt="usuario" height="160px"/></span></li>
                            <li className='match-li-passageiro'><span><img src={usuario} alt="usuario" height="160px"/></span></li>
                            <li className='match-li-passageiro'><span><img src={usuario} alt="usuario" height="160px"/></span></li>
                        </ul>
                        <ul>
                            <li className='match-li-passageiro'><span><img src={usuario} alt="usuario" height="160px"/></span></li>
                            <li className='match-li-passageiro'><span><img src={usuario} alt="usuario" height="160px"/></span></li>
                            <li className='match-li-passageiro'><span><img src={usuario} alt="usuario" height="160px"/></span></li>
                        </ul>         
                    </div>
                </div>
            </div>
            <div className='flex'>
                <form action="/passageiro">
                    <input className='login-form-btn' type="submit" value="Pesquisar"/>
                </form>
                <form action="/chat">
                    <input className='login-form-btn' type="submit" value="Chats"/>
                </form>
            </div>

            <footer className="rodape">
                <p className="rodape-escrito">Developed by</p>
                <p className="rodape-escrito-nome">Augusto Lima, Emanoel Santos, Gustavo Alves, Marcos Vinicius</p>     
            </footer>
        </form>
    </LayoutSemLoginCadastro>
  );
}