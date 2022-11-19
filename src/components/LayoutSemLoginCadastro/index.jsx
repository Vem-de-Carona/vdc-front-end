
import {Link} from 'react-router-dom';
import vdcIMG from '../../assets/Logo_VDC.png';


export const LayoutSemLoginCadastro = (props) => {
    return (
        <div className="container">
            <div className='header'>
                <div className='left-side'>
                    <span><img src={vdcIMG} alt="Vem de Carona"/></span>
                </div>

                    
            </div>

            <div className='right-side'></div>

            <nav>
                <ul class="menu">                      
                    <li><a href="#">O que fazemos?</a>
                        <ul>
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">SEO</a></li>
                            <li><a href="#">Design</a></li>
                        </ul>
                    </li>                     
                </ul>
            </nav>

            <div className="container-login">

                <div className="wrap-login">
                    {props.children}
                </div>

            </div>

        </div>
    )
}