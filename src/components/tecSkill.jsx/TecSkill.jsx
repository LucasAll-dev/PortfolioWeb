import "./styles.css"
import skilCards from "../../assets/data/InfoSkill";


function TecSkill () {
    return (
        <>
            <div id="titulo-container">
                <h3 id="titulo-pagina-skill">Technical skill</h3>
                <div id="linha-skill"></div>
            </div>
            <div id="container-card-skill">
                {skilCards.map((skilCards) => (
                    <div key={skilCards.id} className="card-skill">
                            <h3>{skilCards.tituloSkill}</h3>
                            <div className="container-info-skill">
                                <img src={skilCards.url} alt={skilCards.alt} />
                                <p>{skilCards.descricao}</p>
                            </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TecSkill;