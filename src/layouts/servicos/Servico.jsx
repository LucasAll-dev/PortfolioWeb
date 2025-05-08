import "./styles.css"
import ServicosCards from "../../components/servico/ServicosCards";
import Titulo from "../../components/tituloH3/Titulo";

function Servico () {
    const ContainerServicos = "titulo-container-servicos"
    const IdServicos = "titulo-pagina"
    const TextServicos = "Serviços"
    return (
        <div id="container-layout">
            <Titulo 
                Container={ContainerServicos}
                Id={IdServicos}
                Text={TextServicos}
            />
            <ServicosCards />
        </div>
    )
}


export default Servico;