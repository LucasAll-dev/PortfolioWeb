import "./styles.css";
import { useParams } from "react-router-dom";
import { detalhesServicos } from "../../assets/data/infoDetalhesServicos";
import { listaFInal } from "../../assets/data/infolistaServico"
import ListaDados from "../../components/listaDados/ListaDados";
import WhatsBottom from "../../components/whatsBottom/WhatsBottom"

function ServicosDetalhes () {
    //recebe o id passado pela url
    const { id } = useParams();
    //extrai o objeto a partir do id extraido pela url
    const servico = detalhesServicos.find(p => p.id === parseInt(id));
    const lista = listaFInal.find(p => p.id === parseInt(id));

    //caso nao ache o ID, retorna um aviso que a secao nao foi encontrada
    if(!servico) {
        return (
            <div className="not-found-services">
                <h3>Serviço não encontrado</h3>
                <p>O serviço com o ID {id} não existe em nosso Portfolio</p>
            </div>
        );
    };

    return(
        <div className="container-servicos-detalhes">        
            <div className="container-servicos-info-detalhes">
                <h3 id="titulo-pagina-serDetalhes">{servico.titulo}</h3>
                <h3 className="pacotes-detalhes">O Pacote inclue:</h3>
                <div id="container-list-servicos">
                {/* componente que lista a descricao do servico */}
                    <ListaDados item={lista} />
                    <p id="preco-servicos">R$ {servico.preco}</p>
                    <WhatsBottom />
                </div>
            </div>
            <div className="container-servicos-info-detalhes">
                <img className="img-servicosDetalhados" src={servico.imgG} alt={servico.alt} />
            </div>
        </div>
    );
};

export default ServicosDetalhes;