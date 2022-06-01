import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import './FormularioEmpresa.css';

const FormularioEmpresa = () => {

    const url = 'https://sistema-estagio-api.herokuapp.com/aluno';
    const { data: items, httpConfig, loading } = useFetch(url);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [situacao, setSituacao] = useState('Buscando Estagio');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            nome,
            email,
            cpf,
            endereco,
            situacao,
            usuario,
            senha
        };

        httpConfig(data, "POST");

        setNome('');
        setEmail('');
        setCpf('');
        setEndereco('');
        setSituacao('');
        setUsuario('');
        setSenha('');
        window.location.href = '/login';
    };
    
    return (

        <div className="box">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend><b>Fórmulário para Cadastro do Aluno</b></legend>
                    <br />

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
                        <label htmlFor="endereco" className="labelInput">Endereço
                            <input type="text" name="endereco" id="endereco" className="inputUser" value={endereco} onChange={(e) => setEndereco(e.target.value)} required />
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

                    <div>
                        <label>Situação</label>
                        <select id="situacao" name='situacao' onChange={(event) => {setSituacao(event.target.value)}}>
                            <option value="buscando-estagio" >Buscando Estagio</option>
                            <option value="desempregado">Desempregado</option>
                            <option value="estagiando">Estagiando</option>
                        </select>
                    </div>

                    <input type="submit" name="submit" id="submit" />
                </fieldset>
            </form>
        </div>
    )
}

export default FormularioEmpresa