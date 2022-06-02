import "./Navbar.css";
import {NavLink} from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai'
import { IoLogInSharp } from 'react-icons/io5'
import { GiArchiveRegister } from 'react-icons/gi'
import pasta from '../assets/empresaLogo.png'



const Navbar = () => {
  return (
  
    <nav className="navbar">

      <div className="imagemTrabalhoDiv">
      <img className="imagemTrabalho" src ={pasta}/>
      <p className="frase">A sua carreira começa aqui</p>
      </div>
      
      <div className="boxSettings">
      <div className="navIcon">
        <NavLink className="navlink" to="/" >Inicio</NavLink>
        <AiFillHome/>
        </div>
        
        <div className="navIcon">       
        <NavLink className="navlink" to="/login">Entrar</NavLink>
        <IoLogInSharp/>
        </div>

        <div className="navIcon">
        <NavLink className="navlink" to="/cadastro">Cadastrar-se</NavLink>
        <GiArchiveRegister/>
        </div>
        </div>
    </nav>
    
  )
}

export default Navbar
