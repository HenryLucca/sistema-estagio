import './App.css';

//imports
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

// Pages
import Inicio from './pages/Inicio';
import Cadastro from './pages/Cadastro/Cadastro'
import FormularioCoordenador from './pages/Cadastro/FormularioCoordenador';



function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/cadastro-coordenador" element={<FormularioCoordenador />} />

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
