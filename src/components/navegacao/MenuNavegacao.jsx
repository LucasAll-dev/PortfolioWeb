import "./styles.css"

function MenuNavegacao ({ scrollToSection, ref }) {
    return(
        <nav>
            <button onClick={() => scrollToSection(ref.homeRef)}>Home</button>
            <button onClick={() => scrollToSection(ref.servicoRef)}>Serviços</button>
            <button onClick={() => scrollToSection(ref.portfolioRef)}>Portfolio</button>
            <button onClick={() => scrollToSection(ref.contatoRef)}>Contato</button>
        </nav>
    )
}

export default MenuNavegacao;