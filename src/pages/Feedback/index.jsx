import { LayoutSemLoginCadastro } from '../../components/LayoutSemLoginCadastro';
import { useState } from 'react';

export const Feedback = () => {
  const [nome, setNome] = useState("")
  const [feedback, setFeedback] = useState("")
  const [email, setEmail] = useState("")

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
                    <input
                        placeholder="Informar e-mail"
                        className={email !== "" ? 'has-val input' : 'input'}
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>
                </div>
        
        <div className="flex">
            <textarea 
                placeholder="Comentário"
                className= 'input text-box' 
                type="text"
                value={feedback}
                onChange={e => setFeedback(e.target.value)}/>
        </div>
        
        <div className="flex">    
                <form>
                        <input className='cadastro-form-btn' type="submit" value="Enviar"
                        onClick = {
                            async e => {
                                e.preventDefault();
                                const resp = await fetch("/signUp/user", {
                                    method: "POST",
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        nome: nome,
                                        email: email,
                                        feedback: feedback
                                    })
                                });
                                console.log(resp.status);
                                if (resp.status === 201){
                                    window.location.href = '/telapassageiro';
                                }
                        }}/>
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