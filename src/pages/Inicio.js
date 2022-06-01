//componente
import Navbar from '../components/Navbar';
//imagem
import imagem from '../assets/images.png'
//css
import './Inicio.css'

const Inicio = () => {
    return (
        <div>
            <Navbar/>
            <div className="content" id="inicio">
                <h1>Conheça a sua nova comunidade profissional</h1>
                <img src={imagem} alt="imagem home" />
            </div>
            <div className="page">
                <h1>Aqui o coordenador encontra: </h1>

                <div className="row">
                    <div className="card caracteristicas">
                            <h2>Um ambiente personalizado para fácil entendimento</h2>
                    </div>

                    <div className="card caracteristicas">
                            <h2>Um ambiente filtrado e com informações dispostas e atualizadas sempre que quiser</h2>
                    </div>
                    <div className="card caracteristicas">
                            <h2>Um ambiente com chat para conversar facilmente com os alunos</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inicio
