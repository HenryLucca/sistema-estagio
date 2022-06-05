import { Link } from "react-router-dom"
//images
import chapeu_de_graduacao from '././../../assets/chapeu-de-graduacao.png'
import construcao from '././../../assets/construcao.png'
import utilizador from '././../../assets/do-utilizador.png'

//css
import './Cadastro.css'

const Cadastro = () => {
    return (

        <div className="content" id="inicio">
            <h1>Deseja se cadastrar como:</h1>

            <div className="row">

                <div className="card">
                    <Link className="Link" to="/cadastro-coordenador">
                        <div className="card-coordenador">                     
                            <h2>Coordenador</h2>                         
                            <img className="image" src={utilizador} alt="coordenador-icon" />
                        </div>
                    </Link>
                </div>

                <div className="card">
                    <Link  className="Link" to="/cadastro-empresa">
                        <div className="card-empresa">
                            <h2>Empresa</h2>
                            <img className="image" src={construcao} alt="empresa-icon" />
                        </div>
                    </Link>
                </div>

                <div className="card">
                    <Link className="Link" to="/cadastro-aluno">
                        <div className="card-aluno">
                            <h2>Estágiario</h2>
                            <img className="image" src={chapeu_de_graduacao} alt="estagiario-icon" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Cadastro
