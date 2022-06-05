//componente
import Navbar from '../components/Navbar';
//imagem
import logo from '../assets/logo.png'

//css
import './Inicio.css'


const Inicio = () => {
    return (
       
            
            <div>
                 <Navbar/>
                 <div className="apresentacao">
                     <div className="inicioPrincipal">

                       
                       <div className='textoInicial'>                   
                           <p className='inicialParagrafo'>O gerenciador de Estágios</p>
                           <p className='inicialParagrafo'> Feito especialmente</p>
                           <p className='inicialParagrafo'>Para você</p>                                           
                       
                        </div>

                        <div className='logo'>
                            <img src={logo}/>
                        </div>
             

                     </div>
                 </div>
                 <style>
                @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
                </style>
            </div>
            
    )
}

export default Inicio
