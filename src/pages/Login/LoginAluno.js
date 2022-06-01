import Mural from '../../components/Mural';
import { useLogadoContext } from '../../hooks/useLogadoContext';
import './LoginAluno.css'

const LoginAluno = () => {
  const { logado } = useLogadoContext();

  console.log(logado);

  return (
    <div>
      <h1>Login Aluno</h1>
      
    <Mural nome={logado.nome} />
    </div>
  )
}

export default LoginAluno