import "./styles.css"
import { detalhesServicos } from "../../assets/data/infoDetalhesServicos";
import { Link } from "react-router-dom";

function ServicosCards () {
    return (
            <section className="servicos-layout">
                {detalhesServicos.map((detalhesServicos) => (
                    <Link to={`/servicos/${detalhesServicos.id}`} key={detalhesServicos.id} className="card-link">
                        <div className={detalhesServicos.card_props}>
                            <img className={detalhesServicos.card_img} src={detalhesServicos.img} alt={detalhesServicos.alt} />
                            <h3 className="titulo-servico">{detalhesServicos.titulo}</h3>
                            <p className="preco-card">R${detalhesServicos.preco}</p>
                        </div>
                    </Link>
                ))}
            </section>
    );
};

export default ServicosCards;