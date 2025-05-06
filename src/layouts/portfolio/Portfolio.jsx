import "./styles.css";
import Titulo from "../../components/tituloH3/Titulo";
import CardsPortfolio from "../../components/portfolioCards/CardsPortfolio";

function Portfolio () {
    const containerTitle = "titulo-container-portfolio";
    const Id = "titulo-pagina-portfolio";
    const Text = "Meu Portfolio";

    return (
        <div id="container-portfolio">
            <Titulo 
                Container={containerTitle}
                Id={Id}
                Text={Text}
            />
            <CardsPortfolio />
        </div>
    );
};

export default Portfolio;