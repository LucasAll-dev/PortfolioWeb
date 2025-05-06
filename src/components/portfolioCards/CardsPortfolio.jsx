import { projetos } from "../../assets/data/infoPortfolio";
import "./styles.css";

function CardsPortfolio () {
    return(
        <div id="container-cards-portfolio">
            {projetos.map((projetos) => (
                <div key={projetos.id} className="card-portfolio" id="cards" style={{backgroundImage: `url(${projetos.url})`}}>
                    <h3 className="title_card_portfolio">{projetos.title}</h3>
                    <a className="link_card_portfolio" href={projetos.linkProjeto}>{projetos.saiba}</a>
                </div>
            ))}
        </div>
    );
};

export default CardsPortfolio;