import Mural from '../../components/Mural';
import { useLogadoContext } from '../../hooks/useLogadoContext';
import './LoginAluno.css'

const LoginAluno = () => {
  const { logado } = useLogadoContext();

  console.log(logado);

  return (
    <div className='Vagas'>
 
      
    <Mural nome={logado.nome} />
    </div>
  )
}

export default LoginAluno