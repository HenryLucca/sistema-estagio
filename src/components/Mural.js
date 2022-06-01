import { useFetch } from "../hooks/useFetch"

const Mural = () => {

    const url = 'https://sistema-estagio-api.herokuapp.com/vaga';
    const { data: vagas } = useFetch(url);

    return (
        <div>
            <h1>Mural de Vagas</h1>
            <div>
                <ul>
                    {vagas &&
                        vagas.map(vaga => (
                            <li key={vaga.id}>
                                <h2>{vaga.nome}</h2>
                                <p>{vaga.descricao}</p>
                                <p>{vaga.salario}</p>
                                <p>{vaga.cargaHoraria}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Mural;