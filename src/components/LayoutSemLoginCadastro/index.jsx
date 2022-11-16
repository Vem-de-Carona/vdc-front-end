
import vdcIMG from '../../assets/Logo_VDC.png';
import "./styles.css";


export const LayoutSemLoginCadastro = (props) => {
    return (
        <div className="container">
            <div className='header'>
                <div className='left-side'>
                    <span><img src={vdcIMG} alt="Vem de Carona"/></span>
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