import { useContext, useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import { useLogadoContext } from '../../hooks/useLogadoContext';
import { Link } from 'react-router-dom';
import './Login.css'
import { LogadoContext } from '../../context/usuarioLogadoContext';

const Login = () => {

  const [usuario, setUsername] = useState('');
  const [senha, setSenha] = useState('');
  const [tipo, setTipo] = useState('coordenador');
  const [validou, setValidou] = useState(false);
  const {logado, setLogado} = useContext(LogadoContext);

  const handleChange = (event) => {
    setTipo(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(tipo);

    const data = {
      usuario,
      senha,
      tipo
    };

    verifyLogin(data);
  }

  const verifyLogin = async (data) => {

    let res, fetchData;

    
    if (data.tipo === "empresa") {
      
      res = await fetch("https://sistema-estagio-api.herokuapp.com/empresa");
      fetchData = await res.json();
      console.log(fetchData);

    } else if (data.tipo === "aluno") {
      
      res = await fetch("https://sistema-estagio-api.herokuapp.com/aluno");
      fetchData = await res.json();
      
    } else if (data.tipo === "coordenador") {
      
      res = await fetch("https://sistema-estagio-api.herokuapp.com/coordenador");
      fetchData = await res.json();
    }
    
    //console.log(fetchData);
    
    fetchData.forEach(element => {
      
      console.log(data);
      if (element.usuario === data.usuario && element.senha === data.senha) {
        
        console.log("Login efetuado com sucesso!");
        ChangeLogin(element);

        //window.location.href = "/home";

      } else {
        console.log("Usuário ou senha incorretos!");
      }
    })

  }

  const ChangeLogin = (data) => {
    console.log(data);
    // const {logado, setLogado} = useContext(LogadoContext);
    setLogado(data);
    console.log(logado);

    if(logado != null){
      setValidou(true);
    }
    console.log(validou);
  }

    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Tipo de usuário</label>
            <select id="tipo" name='tipo' onChange={handleChange}>
              <option value="coordenador">Coordenador</option>
              <option value="aluno">Aluno</option>
              <option value="empresa" >Empresa</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="input-usuario">Username</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter usuario" onChange={(e) => setUsername(e.target.value)} required />
            <br />
            <small id="text" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div className="form-group">
            <label htmlFor="input-password">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setSenha(e.target.value)} required />
          </div>

          {!validou ?
            (
              <button type="submit" className="btn btn-primary">Validar Login</button>
            ) : (
              <button id='logar'> <Link to={`/login-${tipo}`}>Logar</Link>  </button>
            )}

        </form>

      </div>
    )
  }

  export default Login;