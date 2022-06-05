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
      <p className="frase">A Sua Carreira Começa Aqui</p>
      </div>
      
      <div className="boxSettings">
      <div className="navIcon">
        <NavLink className="navlink" to="/" >Inicio</NavLink>
        <AiFillHome className="iconNav"/>
        </div>
        
        <div className="navIcon">       
        <NavLink className="navlink" to="/login">Entrar</NavLink>
        <IoLogInSharp className="iconNav" />
        </div>

        <div className="navIcon">
        <NavLink className="navlink" to="/cadastro">Cadastrar</NavLink>
        <GiArchiveRegister className="iconNav"/>
        </div>
        </div>
    </nav>
    
  )
}

export default Navbar
