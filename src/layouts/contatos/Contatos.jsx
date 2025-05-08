import "./styles.css"
import Titulo from "../../components/tituloH3/Titulo";


function Contatos () {
    const containerContatos = "titulo-container-contato";
    const IdContatos = "titulo-pagina-contato";
    const TextContatos = "Entre em contato";

    return(
        <div id="container-contato">
            <Titulo 
                Container={containerContatos}
                Id={IdContatos}
                Text={TextContatos}
            />
        </div>
    );
}

export default Contatos;