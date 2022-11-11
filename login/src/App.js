
import { useState } from 'react';
import vdcIMG from './assets/Logo_VDC.png'
import './reset.css'
import './styles.css'

function App() {
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")

  return (
    
    <div className="container">
      <header className='header'>
        <div className='left-side'>
          <span><img src={vdcIMG} alt="Vem de Carona"/></span>
        </div>
        
        <div className='left-side'>
            <nav>
                <ul class="nav">
                    <li id="login"><a href="/#">Login</a></li>
                    <li id="cadastro"><a href="/#">Cadastro</a></li>
                </ul>
            </nav>
        </div>
      </header>

      <div className="container-login">
        <div className="wrap-login">

          <form className="login-form">

            <span className="login-title"> Bem Vindo!</span>
            <span className="login-infos"> Faça seu Login:</span>

            <div className="wrap-input">
              <input 
                className={email !== "" ? 'has-val input' : 'input'}
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="E-mail"></span>
            </div>

            <div className="wrap-input">
              <input 
                className={password !== "" ? 'has-val input' : 'input'}
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className='container-login-form-btn'>
              <button className='login-form-btn'>Entrar</button>
            </div>

            <div className='text-criar-conta'>
              <span className='txt1'>Não possui conta? </span>
              <a className='txt2' href='/#'> Criar conta.</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
