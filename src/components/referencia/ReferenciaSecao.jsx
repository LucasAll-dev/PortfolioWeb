import { useRef } from "react";
import MenuNavegacao from "../navegacao/MenuNavegacao";
import Apresentacao from "../../layouts/inicio/Apresentacao";
import Servico from "../../layouts/servicos/Servico";
import Portfolio from "../../layouts/portfolio/Portfolio";
import Contatos from "../../layouts/contatos/Contatos";

function HomePage () {
    // Criando um ref para cada seção
    const homeRef = useRef(null);
    const servicoRef = useRef(null);
    const portfolioRef = useRef(null);
    const contatoRef = useRef(null);

    //Funcao para scrool suave
    const scrollToSection = (refs) => {
        refs.current.scrollToSection({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return(
        <div>
            {/* menu que usa a funcao de scroll */}
            <MenuNavegacao scrollToSection={scrollToSection} refs={{homeRef, servicoRef, portfolioRef, contatoRef}} />

            {/* secao da pagina com refs atribuidos */}
            <section refs={homeRef}>{Apresentacao}</section>
            <section refs={servicoRef}>{Servico}</section>
            <section refs={portfolioRef}>{Portfolio}</section>
            <section refs={contatoRef}>{Contatos}</section>

        </div>
    );
}

export default HomePage;