import "./styles.css"
import { useLocation, useNavigate} from "react-router-dom";
import { scroller } from "react-scroll";

function MenuNavegacao () {
    const localPage = useLocation();
    const navegacao = useNavigate();

    // verifica se a rota atual e a home
    const isHome = localPage.pathname === "/";

    //funcao para scroll ate a secao recebida
    const scrollSecao = (Secao) => {
        scroller.scrollTo(Secao, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -70
        });
    };

    //funcao que se o usuario estiver em home ele usa a funcao para scroll para secao, caso nao esteja em home ele volta para home e executa o scroll
    const RedirecionaRotas = (home, nameSecao) => {        
        if(home) {
            //funcao para escrolar para secao escolhida
            scrollSecao(nameSecao);
        } else {
            //funcao para voltar a secao home 
            navegacao("/");
            //funcao para rolar ate secao escolhida
            setTimeout(() => scrollSecao(nameSecao),100); //setTimout da uma pausa antes de executar a funcao
        };
        };
    return(
        <nav>
            <button onClick={() => RedirecionaRotas(isHome, "sobre")} className="link-nav-roxo">Home</button>
            <button onClick={() => RedirecionaRotas(isHome, "servicos")} className="link-nav-padrao">Serviços</button>
            <button onClick={() => RedirecionaRotas(isHome, "portfolio")} className="link-nav-padrao">Portfolio</button>
            <button onClick={() => RedirecionaRotas(isHome, "contato")} className="link-nav-padrao">Contato</button>
        </nav>
    )
}

export default MenuNavegacao;