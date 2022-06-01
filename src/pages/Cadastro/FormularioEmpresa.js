import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import './FormularioEmpresa.css';

const FormularioEmpresa = () => {

    const url = 'https://sistema-estagio-api.herokuapp.com/empresa';
    const { data: items, httpConfig } = useFetch(url);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [tipo, setTipo] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            nome,
            email,
            cpf,
            telefone,
            tipo,
            usuario,
            senha
        };

        httpConfig(data, "POST");

        setNome('');
        setEmail('');
        setCpf('');
        setTipo('');
        setUsuario('');
        setSenha('');
        window.location.href = '/login';
    };
    
    return (

        <div className="box">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend><b>Fórmulário para Cadastro de Empresa</b></legend>

                    <div className="inputBox">
                        <label htmlFor="nome" className="labelInput">Nome completo
                            <input type="text" name="nome" id="nome" className="inputUser" value={nome} onChange={(e) => setNome(e.target.value)} required />
                        </label>
                    </div>

                    <div className="inputBox">
                        <label htmlFor="email" className="labelInput">Email
                            <input type="text" name="email" id="email" className="inputUser" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </label>
                    </div>

                    <div className="inputBox">
                        <label htmlFor="cpf" className="labelInput">CPF
                            <input type="text" name="cpf" id="cpf" className="inputUser" value={cpf} onChange={(e) => setCpf(e.target.value)} pattern="^(?=.*[0-9]).{11}$"
                                title="O CPF deve conter 11 números" required />
                        </label>
                    </div>

                    <div className="inputBox">
                        <label htmlFor="telefone" className="labelInput">Telefone
                            <input type="number" name="telefone" id="telefone" className="inputUser" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
                        </label>
                    </div>

                    <div className="inputBox">
                        <label htmlFor="tipo" className="labelInput">Tipo
                            <input type="text" name="tipo" id="tipo" className="inputUser" value={tipo} onChange={(e) => setTipo(e.target.value)} required />
                        </label>
                    </div>

                    <div className="inputBox">
                        <label htmlFor="usuario" className="labelInput">Usuário
                            <input type="text" name="usuario" id="usuario" className="inputUser" value={usuario} onChange={(e) => setUsuario(e.target.value)} required />
                        </label>
                    </div>

                    <div className="inputBox">
                        <label htmlFor="senha" className="labelInput">Senha
                            <input type="password" name="senha" id="senha" className="inputUser"
                                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$"
                                title="A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos."
                                value={senha} onChange={(e) => setSenha(e.target.value)} required />
                        </label>
                    </div>

                    <input type="submit" name="submit" id="submit" />
                </fieldset>
            </form>
        </div>
    )
}

export default FormularioEmpresa