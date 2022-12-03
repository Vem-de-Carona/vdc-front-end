import { LayoutSemLoginCadastro } from '../../components/LayoutSemLoginCadastro';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Feedback = () => {
  const [nome, setNome] = useState("")
  const [feedback, setFeedback] = useState("")
  return (
    <LayoutSemLoginCadastro>
      <form className="conteudo-principal-escrito">

        <span className="conteudo-principal-escrito-titulo flex"> FeedBack</span>
        <span className="conteudo-principal-escrito-subtitulo flex"> Insira seu nome e de seu feedback sobre nosso site</span>

        <div className="flex">
            <input
                placeholder="Seu nome"
                className={nome !== "" ? 'has-val input' : 'input'}
                type="text"
                value={nome}
                onChange={e => setNome(e.target.value)}/>
        </div>
        
        <div className="flex">
            <textarea 
                placeholder="Comentário"
                className= 'input text-box' 
                type="text"
                value={feedback}
                onChange={e => setFeedback(e.target.value)}/>
        </div>

        <footer className="rodape">
            <p className="rodape-escrito">Developed by</p>
            <p className="rodape-escrito-nome">Augusto Lima, Emanoel Santos, Gustavo Alves, Marcos Vinicius</p>     
        </footer>

      </form>
    </LayoutSemLoginCadastro>
  );
}