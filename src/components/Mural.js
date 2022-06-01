import { useFetch } from "../hooks/useFetch"
import './Mural.css'
import iconeVaga from '././../assets/icone-vaga.png'

const Mural = ({nome}) => {

    const url = 'https://sistema-estagio-api.herokuapp.com/vaga';
    const { data: vagas } = useFetch(url);

    return (
        <div className="mural">
            <h1 className="mural-titulo">Mural de <span>Vagas</span> </h1>
            <h4 className="subtitulo">Olá, {nome}, aqui estão algumas oportunidades para você:</h4>
            <p>Caso se interesse por alguma, fale com seu Coordenador &#128540;</p>
            <div>
                <ul className="vaga-lista">
                    {vagas &&
                        vagas.map(vaga => (
                            <li key={vaga.id} className="vaga-item">
                                <div className="titulo-vaga">
                                <img src={iconeVaga} alt="icone de vaga" className="vaga-icone" />
                                <h2 className="vaga-nome">{vaga.nome}</h2>
                                </div>
                                <p className="vaga-desc">{vaga.descricao}</p>
                                <p className="vaga-salario">{vaga.salario}</p>
                                <p className="vaga-carga">{vaga.cargaHoraria}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Mural;