import { useLogadoContext } from '../../hooks/useLogadoContext';
import { useFetch } from '../../hooks/useFetch';
import './LoginEmpresa.css'
import PostarVaga from '../../components/PostarVaga';
import empresa from '../../assets/emprise.png'

const LoginEmpresa = () => {

  const { logado } = useLogadoContext();
  const url = 'https://sistema-estagio-api.herokuapp.com/coordenador';
  const { data: listaDeCoordenador, httpConfig, loading } = useFetch(url);

  return (
    <div className='pagina-empresa'>
    <img src={empresa}/>
      <p>{logado.usuario}</p>

      <h1>Coordenadores</h1>

      <div>
        <ul className='lista-coordenador'>
          {listaDeCoordenador &&
            listaDeCoordenador.map(coordenador => (
              <li key={coordenador.id} className='item-empresa'>
                
                <div className='aluno-component'>
                  <h3>{coordenador.nome} </h3> 
                  </div>

                <div className='aluno-component'>
                  <p>{coordenador.email}</p> 
                </div>

                <div className='aluno-component'> 
                  <p>{coordenador.cpf}</p> 
                  </div>

                <div > 
                  <p>{coordenador.token}</p> 
                  </div>

              </li>
            ))}
        </ul>

      </div>
      <div className='form-empresa'>
      <h1>Postar vagas</h1>
      <div>
        <PostarVaga />
      </div>
      </div>

    </div>
  )
}

export default LoginEmpresa