import { LayoutSemLoginCadastro } from '../../components/LayoutSemLoginCadastro';
import desenvolvimento from '../../assets/desenvolvimento.png';

export const TelaPassageiro = () => {
  return (
    <LayoutSemLoginCadastro>

        <h1 className="conteudo-principal-escrito-titulo flex">Em desenvolvimento</h1>
        <h2 className="conteudo-principal-escrito-subtitulo flex">Essa parte será entregue na próxima sprint</h2>
        <div className="flex"><img src={desenvolvimento} alt="Carro do Vem de Carona" width='600px'/></div>

    </LayoutSemLoginCadastro>
  );
}