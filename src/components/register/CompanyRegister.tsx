import { useState } from "react";

export default function CompanyRegister(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [type, setType] = useState(''); 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    /* 
        id: number | null,
        name: string,
        email: string,
        cpf: string,
        username: string,
        password: string,
        type: string
    */

    return (
        <div>
            <form>
                <legend>Cadastro</legend>
            </form>
        </div>
    )
}