
import {Link} from 'react-router-dom';
import vdcIMG from '../../assets/Logo_VDC.png';
import "./styles.css";


export const LayoutComponents = (props) => {
    return (
        <div className="container">
            <div className='header'>
                <div className='left-side'>
                    <span><img src={vdcIMG} alt="Vem de Carona"/></span>
                </div>
          
                <div className='right-side'>
                    <nav>
                        <ul class="nav">
                            <li id="nav-botao"><Link to="/">Home</Link></li>
                            <li id="nav-botao"><Link to="/login">Login</Link></li>
                            <li id="nav-botao"><Link to="/cadastro">Cadastro</Link></li>
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