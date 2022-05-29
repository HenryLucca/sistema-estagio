import "./Navbar.css";
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/" >Inicio</NavLink>
        <NavLink to="/login">Entrar</NavLink>
        <NavLink to="/cadastro">Cadastrar-se</NavLink>
    </nav>
  )
}

export default Navbar
