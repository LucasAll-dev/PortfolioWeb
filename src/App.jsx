import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import ServicosDetalhes from "./pages/servicos/ServicosDetalhes";
import ProjetoDetalhes from "./pages/projetos/ProjetoDetalhes";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos/:id" element={<ServicosDetalhes />} />
        <Route path="/projetos/:id" element={<ProjetoDetalhes />} />
        {/*<Route path="*" element={<NotFound />} /> {/* Rota para pagina 404 */}
      </Routes>
      
    </Router>
  )
}

export default App
