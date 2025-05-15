import Fieels from "../logo/Fieels";
import MidiaIcons from "../iconsMidia/MidiaIcons";
import MenuNavegacao from "../navegacao/MenuNavegacao";
import "./styles.css"



function Header ()  {
    return (
        <>
        <header>
            <Fieels />
            <MenuNavegacao />
            <MidiaIcons />
        </header>
        </>
    );
};

export default Header;