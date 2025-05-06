import "./styles.css"
import skilCards from "../../assets/data/InfoSkill";
import Titulo from "../tituloH3/Titulo";


function TecSkill () {
    const containerSkill = "titulo-container";
    const IdSkill = "titulo-pagina-skill";
    const TextSkill = "Technical skillr";
    const linhaBranca = "linha-skill";

    return (
        <>
            <Titulo 
                Container={containerSkill}
                Id={IdSkill}
                Text={TextSkill}
                IdLinha={linhaBranca}
            />
            <div id="container-card-skill">
                {skilCards.map((skilCards) => (
                    <div key={skilCards.id} className="card-skill">
                            <h3>{skilCards.tituloSkill}</h3>
                            <div className="container-info-skill">
                                <img id={skilCards.id_img} src={skilCards.url} alt={skilCards.alt} />
                                <p>{skilCards.descricao}</p>
                            </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TecSkill;