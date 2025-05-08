import Fieels from "../logo/Fieels";
/*import MenuNavegacao from "../navegacao/MenuNavegacao";*/
import HomePage from "../referencia/ReferenciaSecao";
import "./styles.css"
import { SocialIcon } from 'react-social-icons'


/*
//Array de objetos para os links do nav
const linksNav = [
    {id: 1, list_none: "list-none"  , class: "link-nav-roxo" , url: "#", name: "HOME"},
    {id: 2, list_none: "list-none"  , class: "link-nav-padrao" , url: "#", name: "PORTFOLIO"},
    {id: 3, list_none: "list-none"  , class: "link-nav-padrao" , url: "#", name: "SERVIÇOS"},
    {id: 4, list_none: "list-none"  , class: "link-nav-padrao" , url: "#", name: "CONTATO"},
];*/


function Header ()  {
    return (
        <>
        <header>
            <Fieels />
            <HomePage />
            <div className="container-social-midia">
                <SocialIcon network='instagram' url="https://www.instagram.com/udhymaas/" style={{width: 30, height: 30}} />
                <SocialIcon url="https://www.threads.net/?hl=pt-br" bgColor="#ffff" fgColor="#000" style={{width: 30, height: 30}} /> 
            </div>
        </header>
        </>
    );
};

export default Header;