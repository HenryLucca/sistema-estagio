import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

const PostarVaga = () => {

    const url = 'https://sistema-estagio-api.herokuapp.com/vaga';
    const { data: items, httpConfig, loading } = useFetch(url);
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [salario, setSalario] = useState('');
    const [cargaHoraria, setCargaHoraria] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            nome,
            descricao,
            salario,
            cargaHoraria
        };

        httpConfig(data, "POST");

        setNome('');
        setDescricao('');
        setSalario('');
        setCargaHoraria('');

    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="inputBox">
                <label htmlFor="nome" className="labelInput">Nome da vaga
                    <input type="text" name="nome" id="nome" className="inputUser" value={nome} onChange={(e) => setNome(e.target.value)} required />
                </label>
            </div>

            <div className="inputBox">
                <label htmlFor="descricao" className="labelInput">Descrição da vaga
                    <input type="text" name="descricao" id="descricao" className="inputUser" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
                </label>
            </div>

            <div className="inputBox">
                <label htmlFor="salario" className="labelInput">Salário
                    <input type="text" name="salario" id="salario" className="inputUser" value={salario} onChange={(e) => setSalario(e.target.value)} required />
                </label>
            </div>

            <div className="inputBox">
                <label htmlFor="cargaHoraria" className="labelInput">Carga horária
                    <input type="text" name="cargaHoraria" id="cargaHoraria" className="inputUser" value={cargaHoraria} onChange={(e) => setCargaHoraria(e.target.value)} required />
                </label>
            </div>
            
            <input type="submit" name="submit" value="Enviar Vaga" />
        </form>
    </div>
  )
}

export default PostarVaga;