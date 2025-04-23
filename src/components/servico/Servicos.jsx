import "./styles.css"

const servicos = [
    {id: 1, link:"#", card_props: "card-props" , card_img: "card-img" , img: "../src/assets/img/logo.PNG", alt: "fotos dos servicos", titulo: "Pacote de Casamento", preco: "1200,0"},
    {id: 2, link:"#", card_props: "card-props" , card_img: "card-img" , img: "../src/assets/img/logo.PNG", alt: "fotos dos servicos", titulo: "Pacote de Casamento", preco: "1200,0"},
    {id: 3, link:"#", card_props: "card-props" , card_img: "card-img" , img: "../src/assets/img/logo.PNG", alt: "fotos dos servicos", titulo: "Pacote de Casamento", preco: "1200,0"},
    {id: 4, link:"#", card_props: "card-props" , card_img: "card-img" , img: "../src/assets/img/logo.PNG", alt: "fotos dos servicos", titulo: "Pacote de Casamento", preco: "1200,0"},
    {id: 5, link:"#", card_props: "card-props" , card_img: "card-img" , img: "../src/assets/img/logo.PNG", alt: "fotos dos servicos", titulo: "Pacote de Casamento", preco: "1200,0"},
    {id: 6, link:"#", card_props: "card-props" , card_img: "card-img" , img: "../src/assets/img/logo.PNG", alt: "fotos dos servicos", titulo: "Pacote de Casamento", preco: "1200,0"}
]

function Servicos () {
    return (
        <div id="container-layout">
            <h3 id="titulo-pagina">Serviços</h3>
            <div id="linha-servicos"></div>
            <section className="servicos-layout">
                {servicos.map((servicos) => (
                    <a key={servicos.id} className="card-link"  href={servicos.link}>
                        <div className="card-props">
                            <img className={servicos.card_img} src={servicos.img} alt={servicos.alt} />
                            <h3 className="titulo-servico">{servicos.titulo}</h3>
                            <p className="preco-card">R${servicos.preco}</p>
                        </div>
                    </a>
                ))}
            </section>
        </div>
    );
};

export default Servicos;