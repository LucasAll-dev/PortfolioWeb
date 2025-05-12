import "./styles.css"
import Titulo from "../tituloH3/Titulo";
import MidiaIcons from "../iconsMidia/MidiaIcons"
import WhatsBottom from "../whatsBottom/WhatsBottom";


function Contato () {
    const containerContatos = "titulo-container-contato";
    const IdContatos = "titulo-pagina-contato";
    const TextContatos = "Entre em contato";

    return(
        <>
            <div className="layout-contato-segmentos">
                <Titulo
                    Container={containerContatos}
                    Id={IdContatos}
                    Text={TextContatos}
                />
                <p id="textoParaContato">
                    Tem dúvidas, quer solicitar um orçamento ou tem alguma ideia<br />
                    que gostaria de discutir? Estou à disposição para ajudar!<br />
                    Clique no botão abaixo para entrar em contato comigo diretamente<br />
                    pelo WhatsApp. Será um prazer conversar sobre seu projeto e como<br />
                    posso ajudar a transformar suas ideias em vídeos incríveis!
                </p>
                <WhatsBottom />
                <p id="textEmail">E-mail@exemplo<br />
                (55) 9932-1734</p>
                <MidiaIcons />
            </div>
            <div className="layout-contato-segmentos">
                <img id="img-contato" src="src/assets/img/IMG_5003.JPG" alt="foto do video-maker dhymas" />
                <p id="text-img-contato">
                    Lorem ipsum dolor sit amet, consectetur<br />
                    adipiscing elit. Cras sit amet magna eget enim<br />
                    suscipit tincidunt id id ante. Nunc imperdiet dui<br />
                    ac accumsan lobortis.<br />
                </p>
            </div>
        </>
    );
};


export default Contato;