import "./styles.css";
import Fieels from "../logo/Fieels";
import MidiaIcons from "../iconsMidia/MidiaIcons";


function Footer () {
    return(
        <footer role="contentinfo">
            <div className="container-footer-info" id="container-footer-esquerda" >
                <Fieels />
                © 2025 todos os direitos reservados a Fieelds
            </div>
            <div className="container-footer-info" id="container-footer-direita">
                <MidiaIcons />
            </div>
        </footer>
    );
};


export default Footer;