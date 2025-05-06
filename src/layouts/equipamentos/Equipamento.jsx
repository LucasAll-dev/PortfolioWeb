import "./styles.css"
import Titulo from "../../components/tituloH3/Titulo";

function Equipamentos () {
    const containerEquipamentos = "titulo-container-equipamentos";
    const IdEquipamentos = "titulo-pagina-equipamentos";
    const TextEquipamentos = "Minhas Ferramentas";

    return(
        <div id="container-equipamentos">
            <Titulo 
                Container={containerEquipamentos}
                Id={IdEquipamentos}
                Text={TextEquipamentos}
            />
        </div>
    );
}

export default Equipamentos;