import { useLogadoContext } from '../../hooks/useLogadoContext';

const LoginAluno = () => {
  const { logado } = useLogadoContext();

  console.log(logado);

  return (
    <>
    <div>LoginAluno</div>
    <p>nome: {logado.usuario}</p>
    </>
  )
}

export default LoginAluno