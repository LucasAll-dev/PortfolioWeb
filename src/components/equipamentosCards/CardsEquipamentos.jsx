import { equipamentos } from "../../assets/data/infoEquipamentos";
import "./styles.css"

function CardsEquipamentos () {
    return(
        <div className="layout-cards">
            {equipamentos.map((equipamentos) => (
                <div key={equipamentos.id}>
                    <img src={equipamentos.url} alt="" />
                    <div >
                        <h3>{equipamentos.title}</h3>
                        <p>{equipamentos.marca}</p>
                        <p>{equipamentos.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardsEquipamentos;