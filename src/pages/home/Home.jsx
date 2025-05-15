//import "./styles.css"
import Servico from "../../layouts/servicos/Servico";
import Skill from "../../layouts/skill/Skill";
import Portfolio from "../../layouts/portfolio/Portfolio";
import Contatos from "../../layouts/contatos/Contatos";
import Sobre from "../../components/sobre/Sobre";
import { Element } from "react-scroll";

function Home () {
    return (
        <div className="container-global">
            <Element name="sobre">
                <Sobre />
            </Element>
            <Element name="servicos">
                <Servico />
            </Element>
            <Element name="portfolio">
                <Portfolio />
            </Element>
            <Skill />
            <Element name="contato">
                <Contatos />
            </Element>
        </div>
    );
};

export default Home;