
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { LayoutComponents } from '../../components/LayoutComponents';

export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <LayoutComponents>

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

        <form action="/#">
          <input className='login-form-btn' type="submit" value="Entrar"/>
        </form>

        <div className='text-criar-conta'>
          <span className='txt1'>Não possui conta? </span>
          <Link className='txt2' to='/cadastro'> Criar conta.</Link>
        </div>

      </form>
    </LayoutComponents>
  );
}