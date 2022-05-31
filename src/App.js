import './App.css';

//imports
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

// Pages
import Inicio from './pages/Inicio';
import Cadastro from './pages/Cadastro/Cadastro'
import FormularioCoordenador from './pages/Cadastro/FormularioCoordenador';
import FormularioEmpresa from './pages/Cadastro/FormularioEmpresa';
import FormularioAluno from './pages/Cadastro/FormularioAluno';
import PaginaDeDerro from './pages/PaginaDeErro';
import Login from './pages/Login/Login';
import LoginCoordenador from './pages/Login/LoginCoordenador';
import LoginEmpresa from './pages/Login/LoginEmpresa';
import LoginAluno from './pages/Login/LoginAluno';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login-coordenador" element={<LoginCoordenador />} />
          <Route path="/login-empresa" element={<LoginEmpresa />} />
          <Route path="/login-aluno" element={<LoginAluno />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/cadastro-coordenador" element={<FormularioCoordenador />} />
          <Route path="/cadastro-empresa" element={<FormularioEmpresa />} />
          <Route path="/cadastro-aluno" element={<FormularioAluno />} />
          <Route path="*" element={<PaginaDeDerro />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
