import "./styles.css"
import ServicosCards from "../../components/servico/ServicosCards";

function Servico () {
    return (
        <div id="container-layout">
            <h3 id="titulo-pagina">Serviços</h3>
            <div id="linha-servicos"></div>
            <ServicosCards />
        </div>
    )
}


export default Servico;