//import "./styles.css"
import Servico from "../../layouts/servicos/Servico";
import Skill from "../../layouts/skill/Skill";
import Portfolio from "../../layouts/portfolio/Portfolio";
import Contatos from "../../layouts/contatos/Contatos";
import Sobre from "../../components/sobre/Sobre";


function Home () {
    return (
        <div className="container-global">
            <Sobre id="sobre"  />
            <Servico />
            <Skill />
            <Portfolio />
            <Contatos />
        </div>
    );
};

export default Home;