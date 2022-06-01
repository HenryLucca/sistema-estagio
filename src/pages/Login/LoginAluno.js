import Mural from '../../components/Mural';
import { useLogadoContext } from '../../hooks/useLogadoContext';

const LoginAluno = () => {
  const { logado } = useLogadoContext();

  console.log(logado);

  return (
    <div>
    <div>LoginAluno</div>
    <p>nome: {logado.usuario}</p>
    
    <Mural />
    </div>
  )
}

export default LoginAluno