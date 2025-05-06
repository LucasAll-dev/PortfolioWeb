import "./styles.css"

function Titulo ({ Container, Id, Text, IdLinha = "linha-skill-1" }) {
    return(
        <div id={Container}>
                <h3 id={Id}>{Text}</h3>
                <div className={IdLinha}></div>
        </div>
    );
};


export default Titulo;