import AuthInput from "@/components/auth/AuthInput";
import ChangeThemeButton from "@/components/page-components/ChangeThemeButton";
import useAppData from "@/hooks/useContext/useAppData";
import { IconWarning } from "@/icons/icons";
import Link from "next/link";
import { useState } from "react";

export default function Auth(){

    const [authType, setAuthType] = useState<'login' | 'register'>('login');
    const {theme, changeTheme} = useAppData();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function showError(message: string, timeInSeconds = 5){
        setError(message);
        setTimeout(() => setError(''), timeInSeconds * 1000);
    }

    return (
        <div className={`${theme} ${theme === "dark" ? "bg-zinc-900" : "bg-white"} flex h-screen items-center justify-center`}>
            <div className="hidden md:block md:w-1/3 lg:w-1/2">
                <img className="h-screen w-full object-cover" src="https://cdn.wallpapersafari.com/39/72/Bxf5KJ.jpg" alt="Imagem de arranha-céus da tela de cadastro" />
            </div>

            <div className="m-5 w-full md:w-2/3 lg:h-1/2">
                <div className="flex justify-end">
                    <ChangeThemeButton theme={theme === undefined ? '' : theme} changeTheme={changeTheme} />
                </div>

                <h1 className="text-zinc-800 dark:text-zinc-100 text-2xl font:bold mb-5">
                    Entre com a sua conta
                </h1>

                {error ? (
                    <div className="flex items-center bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg">
                        {IconWarning(6)}
                        <span className="ml-3">{error}</span>
                    </div>
                ):(false)}

                <AuthInput
                    label="Usuário"
                    value={username}
                    type="text"
                    onChange={setUsername}
                />
                <div className="mb-2.5"></div>
                <AuthInput
                    label="Senha"
                    value={password}
                    type="password"
                    onChange={setPassword}
                />

                <button
                    onClick={() => showError('Funcionalidade não implementada')}
                    className="w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6"
                >
                    Entrar
                </button>

                <hr className="my-6 border-gray-300 w-full" />

                <p className="text-zinc-800 dark:text-zinc-100">Novo por aqui ?</p>
                <Link href="/auth/register" legacyBehavior>
                    <a className="text-blue-500 hover:text-blue-700 font-semibold">
                        Cadastre-se gratuitamente
                    </a>
                </Link>
            </div>
        </div>
    )
}