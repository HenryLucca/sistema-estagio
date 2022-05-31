import { useLogadoContext } from '../../hooks/useLogadoContext';

const LoginCoordenador = () => {
  const { logado } = useLogadoContext();

  console.log(logado);

  return (
    <>
    <div>LoginCoordenador</div>
    <p>nome: {logado.usuario}</p>
    </>
  )
}

export default LoginCoordenador