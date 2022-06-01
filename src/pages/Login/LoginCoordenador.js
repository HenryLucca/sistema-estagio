import { useLogadoContext } from '../../hooks/useLogadoContext';
import { useFetch } from '../../hooks/useFetch';
import './LoginCoordenador.css'

const LoginCoordenador = () => {
  const { logado } = useLogadoContext();

  const { data: empresas } = useFetch('https://sistema-estagio-api.herokuapp.com/empresa');
  const { data: alunos } = useFetch('https://sistema-estagio-api.herokuapp.com/aluno');



  console.log(logado);

  return (
    <div>
      <div>LoginCoordenador</div>
      <p>nome: {logado.usuario}</p>


      <h1>Alunos</h1>
      <div>
        <ul className='lista-aluno'>
          {alunos &&
            alunos.map(aluno => (
              <li key={aluno.id} className='item-aluno'>
                <h3>{aluno.nome} </h3>
                <p>{aluno.email}</p>
                <p>{aluno.cpf}</p>
                <p>{aluno.endereco}</p>
                <p>{aluno.situacao}</p>
              </li>
            ))}
        </ul>
      </div>

      <h1>Empresas</h1>
      <div>
        <ul className='lista-empresa'>
          {empresas &&
            empresas.map(empresa => (
              <li key={empresa.id} className='item-empresa'>
                <h3>{empresa.nome} </h3>
                <p>{empresa.email}</p>
                <p>{empresa.cpf}</p>
                <p>{empresa.endereco}</p>
                <p>{empresa.telefone}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default LoginCoordenador