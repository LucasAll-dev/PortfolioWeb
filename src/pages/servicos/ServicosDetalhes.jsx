import "./styles.css";
import { useParams } from "react-router-dom";
import { detalhesServicos } from "../../assets/data/infoDetalhesServicos";
import Titulo from "../../components/tituloH3/Titulo";
import { listaFInal } from "../../assets/data/infolistaServico"
import ItemLista from "./ItemLista";
import ListaDinamica from "./ItemLista";

function ServicosDetalhes () {
    //variaveis para passar estilizacao ao com titulo
    const containerDetalhesServico = "titulo-servicos-detalhes";
    const IdDetalhesServico = "titulo-pagina-serDetalhes";

    //encontra o servico conventerndo o id para int
    const { id } = useParams();
    const servico = detalhesServicos.find(p => p.id === parseInt(id));
    console.log(servico)
    const lista = listaFInal.find(p => p.id === parseInt(id));
    console.log(lista)
    alert(lista.id)


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
                
                {/*<ListaDinamica  itens={lista} />*/}

            </div>
            <div className="container-servicos-info-detalhes">
                <img className="img-servicosDetalhados" src={servico.imgG} alt={servico.alt} />
            </div>
        </div>
    );
};

export default ServicosDetalhes;