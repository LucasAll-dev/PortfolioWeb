import "./styles.css";
import { useParams } from "react-router-dom";
import { detalhesServicos } from "../../assets/data/infoDetalhesServicos";
import Titulo from "../../components/tituloH3/Titulo";
import { listaFInal } from "../../assets/data/infolistaServico"
import ListaDados from "../../components/listaDados/ListaDados";

function ServicosDetalhes () {
    //variaveis para passar estilizacao ao com titulo
    const containerDetalhesServico = "titulo-servicos-detalhes";
    const IdDetalhesServico = "titulo-pagina-serDetalhes";

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
                <Titulo
                    Container={containerDetalhesServico}
                    Id={IdDetalhesServico}
                    Text={servico.titulo}
                />
                <h3 className="pacotes-detalhes">O Pacote inclue:</h3>
                {/* componente que lista a descricao do servico */}
                <ListaDados item={lista} />

            </div>
            <div className="container-servicos-info-detalhes">
                <img className="img-servicosDetalhados" src={servico.imgG} alt={servico.alt} />
            </div>
        </div>
    );
};

export default ServicosDetalhes;