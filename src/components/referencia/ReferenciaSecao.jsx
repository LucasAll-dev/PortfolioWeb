import { useLocation } from "react-router-dom";

function RedirecionaRotas() {
    const { localPage } = useLocation();


    if (localPage === "/") {
        return (
            <p>deu certo {localPage}</p>
        )
    } else {
        return(
            <p>nao deu certo</p>
        )
    }
}

export default RedirecionaRotas;