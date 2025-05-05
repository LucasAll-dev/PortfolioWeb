//import "./styles.css"
import Header from "../components/header/Header"
import Sobre from "../components/sobre/Sobre"
import Portfolio from "../layouts/portfolio/Portfolio";
import Servico from "../layouts/servicos/Servico"
import Skill from "../layouts/skill/Skill";

function Home () {
    return (
        <div className="container-global">
            <Header /> 
            <Sobre />
            <Servico />
            <Skill />
            <Portfolio />
        </div>
    );
};

export default Home;