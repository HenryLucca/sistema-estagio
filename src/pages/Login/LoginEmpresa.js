import { useLogadoContext } from '../../hooks/useLogadoContext';
import { useFetch } from '../../hooks/useFetch';
import './LoginEmpresa.css'
import PostarVaga from '../../components/PostarVaga';

const LoginEmpresa = () => {

  const { logado } = useLogadoContext();
  const url = 'https://sistema-estagio-api.herokuapp.com/coordenador';
  const { data: listaDeCoordenador, httpConfig, loading } = useFetch(url);

  return (
    <div>
      <div>LoginEmpresa</div>
      <p>nome: {logado.usuario}</p>
      <h1>Coordenadores</h1>

      <div>
        <ul className='lista-coordenador'>
          {listaDeCoordenador &&
            listaDeCoordenador.map(coordenador => (
              <li key={coordenador.id} className='item-coordenador'>
                <h3>{coordenador.nome} </h3>
                <p>{coordenador.email}</p>
                <p>{coordenador.cpf}</p>
                <p>{coordenador.token}</p>
              </li>
            ))}
        </ul>

      </div>

      <h1>Postar vagas</h1>
      <div>
        <PostarVaga />
      </div>

    </div>
  )
}

export default LoginEmpresa