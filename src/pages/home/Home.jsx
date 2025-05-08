//import "./styles.css"
import Servico from "../../layouts/servicos/Servico";
import Skill from "../../layouts/skill/Skill";
import Portfolio from "../../layouts/portfolio/Portfolio";
import Contatos from "../../layouts/contatos/Contatos";
import Footer from "../../components/footer/Footer";
import Sobre from "../../components/sobre/Sobre";
import Header from "../../components/header/Header";

function Home () {
    return (
        <div className="container-global">
            <Header /> 
            <Sobre />
            <Servico />
            <Skill />
            <Portfolio />
            <Contatos />
            <Footer />
        </div>
    );
};

export default Home;