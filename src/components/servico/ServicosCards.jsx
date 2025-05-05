import "./styles.css"
import servicos from "../../assets/data/InfoServico"


function ServicosCards () {
    return (
            <section className="servicos-layout">
                {servicos.map((servicos) => (
                    <a key={servicos.id} className="card-link" href={servicos.link}>
                        <div className={servicos.card_props}>
                            <img className={servicos.card_img} src={servicos.img} alt={servicos.alt} />
                            <h3 className="titulo-servico">{servicos.titulo}</h3>
                            <p className="preco-card">R${servicos.preco}</p>
                        </div>
                    </a>
                ))}
            </section>
    );
};

export default ServicosCards;