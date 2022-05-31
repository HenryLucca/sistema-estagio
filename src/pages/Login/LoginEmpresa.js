import { useLogadoContext } from '../../hooks/useLogadoContext';

const LoginEmpresa = () => {
  const { logado } = useLogadoContext();

  console.log(logado);

  return (
    <>
    <div>LoginEmpresa</div>
    <p>nome: {logado.usuario}</p>
    </>
  )
}

export default LoginEmpresa