import Fieels from "../logo/Fieels";
import MidiaIcons from "../iconsMidia/MidiaIcons";
/*import MenuNavegacao from "../navegacao/MenuNavegacao";*/
import HomePage from "../referencia/ReferenciaSecao";
import "./styles.css"


function Header ()  {
    return (
        <>
        <header>
            <Fieels />
            <HomePage />
            <MidiaIcons />
        </header>
        </>
    );
};

export default Header;