//componente
import Navbar from '../components/Navbar';
//imagem
import imagem from '../assets/images.png'
import empresa from '../assets/empresa.png'
import coordenador from '../assets/coordenador.png'
import estagiario from '../assets/estagiario.png'
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


                        <div className='vantagensInicial'>
                            <div className='informacao'>
                                <div className='tituloInicial'>
                                    <p>Servimos você independente da sua finalidade</p>
                                </div>

                                <div className='cardEmpresa'>
                                   
                                   <div className='container'>
                                    <p>Empresa</p>
                                    <img src={empresa}/>
                                    </div>
                                    <ul>
                                        <li>Somos os Melhores amigos das empresas</li>
                                        <li>Achamos os candidatos mais preparados para suas vagas</li>
                                        <li>Publique suas vagas um facil processo de contratação pelo nosso aplicativo</li>
                                    </ul>
                                </div>

                                <div className='cardEmpresa'>

                                <div className='container'>
                                        <p>Coordenador</p>
                                        <img src={coordenador}/>
                                    </div>
                                    <ul>
                                        <li>Vamos oferecer a você uma dashboard com as informações dos seus alunos</li>
                                        <li>Você terá acesso as melhores vagas e poderá selecionar para quais alunos enviar</li>
                                        <li>Controle da documentação e das normas de estágio</li>
                                    </ul>
                                </div>

                                <div className='cardEmpresa'>

                                <div className='container'>
                                        <p>Estágiario</p>
                                        <img src={estagiario}/>
                                    </div>
                                    <ul>
                                        <li>Você conseguirá sua primeira oportunidade de trabalho</li>
                                        <li>Receba apenas vagas ideais para você</li>
                                        <li>Controle dos seus documentos e automatização de processos</li>
                                    </ul>
                                </div>
                                



                            </div>
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
