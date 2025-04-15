//import "./styles.css"
import Header from "../components/header/Header"
import Sobre from "../components/sobre/Sobre"
import Servicos from "../components/servico/Servicos"

function Home () {
    return (
        <div className="container-global">
            <Header /> 
            <Sobre />
            <Servicos />
        </div>
    );
};

export default Home;