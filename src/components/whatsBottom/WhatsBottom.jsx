import "./styles.css"

function WhatsBottom () {
    const numeroWhats = "558694044738";
    const mensagem = "Olá, gostaria de fazer um orçamento!";

    const WhatsAppUrl = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(mensagem )}`;
    return(
        <>
            <a
                href={WhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bottom-whats"
            >
                WhatsApp
            </a>
        </>
    );
};


export default WhatsBottom;