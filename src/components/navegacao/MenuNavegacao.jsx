import "./styles.css"
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function MenuNavegacao () {
    const localPage = useLocation();
    const navegacao = useNavigate();

    const section = useRef();

    // adiciona as referencias das secoes
    const AdicionaRefs = (el) => {
        if (el && !section.current.includes(el)) {
            section.current.push(el);
        };
    };

      // Efeito para scroll quando a URL muda
useEffect(() => {
    const hash = localPage.hash.replace('#', '');
    if (hash) {
        const element = document.getElementById(hash);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    }
}, [localPage]);

    // verifica se a rota atual 
    const isHome = localPage.pathname === "/";

    const RedirecionaRotas = (home, rotaSecao) => {
        
        if(home) {
            //funcao para escrolar para secao escolhida
        } else {
            //funcao para voltar a secao home 
            navegacao(home);
            rotaSecao
            //funcao para rolar ate secao escolhida
        }


    }

    return(
        <nav>
            <button onClick={() => RedirecionaRotas(isHome, "#sobre")} className="link-nav-roxo">Home</button>
            <button onClick={() => RedirecionaRotas(isHome, "#servicosCards")} className="link-nav-padrao">Serviços</button>
            <button onClick={() => RedirecionaRotas(isHome, "/")} className="link-nav-padrao">Portfolio</button>
            <button onClick={() => RedirecionaRotas(isHome, "/")} className="link-nav-padrao">Contato</button>
        </nav>
    )
}

export default MenuNavegacao;