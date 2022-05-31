import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import './Login.css'

const Login = () => {

  const [usuario, setUsername] = useState('');
  const [senha, setSenha] = useState('');
  const [tipo, setTipo] = useState('coordenador');

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

    console.log(data.tipo);

    if (data.tipo === "empresa") {

      res = await fetch("https://sistema-estagio-api.herokuapp.com/empresa");
      fetchData = await res.json();
    } else if (data.tipo === "aluno") {

      res = await fetch("https://sistema-estagio-api.herokuapp.com/aluno");
      fetchData = await res.json();

    } else if (data.tipo === "coordenador") {

      res = await fetch("https://sistema-estagio-api.herokuapp.com/coordenador");
      fetchData = await res.json();
    }

    console.log(fetchData);


    fetchData.forEach(element => {

      if (element.usuario === data.usuario && element.senha === data.senha) {

        console.log("Login efetuado com sucesso!");

        //window.location.href = "/home";

      } else {
        console.log("Usuário ou senha incorretos!");
      }
    })

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
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>
    )
  }

  export default Login;