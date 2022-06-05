import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import './FormularioCoordenador.css';
import { BsFillPersonFill } from 'react-icons/bs'
import { RiLockPasswordLine } from 'react-icons/ri'
import { MdPassword} from 'react-icons/md'
import { AiOutlineFieldNumber ,AiOutlineMail} from 'react-icons/ai'
import { FaUserCircle} from 'react-icons/fa'







const FormularioCoordenador = () => {

    const url = 'https://sistema-estagio-api.herokuapp.com/coordenador';
    const { data: items, httpConfig, loading } = useFetch(url);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [token, setToken] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            nome,
            email,
            cpf,
            token,
            usuario,
            senha
        };

        httpConfig(data, "POST");

        // const res = await fetch("http://localhost:3000/coordenador", {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(data),
        //   });
        //   const addedProduct = await res.json();

        setNome('');
        setEmail('');
        setCpf('');
        setToken('');
        setUsuario('');
        setSenha('');
        window.location.href = '/login';

    };
    
    return (

        <div className="box-coordenador">
            <form className='form-coordenador empresa' onSubmit={handleSubmit}>
                <div className='cadastro-coordenador'>
                    <legend class='titulo-cadastro'><b>Register</b></legend>

                    <div className="inputBox">
                        <label htmlFor="nome" className="labelInput">Nome  </label>
                            <input type="text" placeholder="Name" name="nome" id="nome" className="inputUser" value={nome} onChange={(e) => setNome(e.target.value)} required />
                            <BsFillPersonFill className='cadastro-icone'/>
                       
                    </div>

                    <div className="inputBox">
                        <label htmlFor="email" className="labelInput">Email </label>
                            <input type="text" placeholder="Email"name="email" id="email" className="inputUser" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <AiOutlineMail className='cadastro-icone'/>
                    </div>

                    <div className="inputBox">
                        <label htmlFor="cpf" className="labelInput">CPF </label>
                            <input type="text" placeholder="Cpf" name="cpf" id="cpf" className="inputUser" value={cpf} onChange={(e) => setCpf(e.target.value)} pattern="^(?=.*[0-9]).{11}$"
                                title="O CPF deve conter 11 números" required />
                             <AiOutlineFieldNumber className='cadastro-icone'/>
                      
                    </div>

                    <div className="inputBox">
                        <label htmlFor="token" className="labelInput">Token</label>
                            <input type="number" placeholder="Token" name="token" id="token" className="inputUser" value={token} onChange={(e) => setToken(e.target.value)} required />
                            
                            <RiLockPasswordLine className='cadastro-icone'/>
                    </div>

                    <div className="inputBox">
                        <label htmlFor="usuario" className="labelInput">Usuário</label>
                            <input type="text" placeholder="Usuario" name="usuario" id="usuario" className="inputUser" value={usuario} onChange={(e) => setUsuario(e.target.value)} required />
                            <FaUserCircle className='cadastro-icone'/>
                    </div>

                    <div className="inputBox">
                        <label htmlFor="senha"  className="labelInput">Senha</label>
                            <input type="password" placeholder="Password" name="senha" id="senha" className="inputUser"
                                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$"
                                title="A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos."
                                value={senha} onChange={(e) => setSenha(e.target.value)} required />                       
                            <MdPassword className='cadastro-icone'/>
                    </div>

                    <input type="submit" className='submit-button' name="submit" id="submit" />
                </div>
            </form>
        </div>
    )
}

export default FormularioCoordenador