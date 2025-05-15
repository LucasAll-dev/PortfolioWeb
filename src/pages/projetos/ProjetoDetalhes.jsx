import "./styles.css"
import { useParams } from "react-router-dom";
import infoPortfolio from "../../assets/data/infoPortfolio"

function ProjetoDetalhes () {
    //recebe o id passado pela url
    const { id } = useParams;
    //extrai o objeto a partit do id extraido pela url
    const portfolio = infoPortfolio.find(p => p.id === parseInt(id));

    //caso nao ache o ID, retorna um aviso que a secao nao foi encontrada
    if(!portfolio) {
        return (
            <div className="not-found-services">
                <h3>Projeto não encontrado</h3>
                <p>O projeto com o ID {id} não existe em nosso Portfolio</p>
            </div>
        );
    };

    return(
        <>
            <h3>{portfolio.titlePage}</h3>
            <video src={portfolio.linkVdeo}></video>
            <p></p>{/* tipo do produto */}
            <p></p>{/* nome do cliente e informacao */}
            <p></p>{/* ano de producao */}
            <h3></h3>{/* outros projetos */}
            {/* tres cards para outros projetos */}
        </>
    );
};

export default ProjetoDetalhes;