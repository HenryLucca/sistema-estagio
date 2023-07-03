import AuthInput from "@/components/auth/AuthInput";
import ChangeThemeButton from "@/components/page-components/ChangeThemeButton";
import useAppData from "@/hooks/useContext/useAppData";
import useAuth from "@/hooks/useContext/useAuth";
import { Icon4MonkeysInc, IconGoogle, IconWarning } from "@/icons/icons";
import Link from "next/link";
import { useState } from "react";

export default function Auth() {
  const [authType, setAuthType] = useState<"login" | "register">("login");
  const { theme, changeTheme } = useAppData();
  const { register, login, loginGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  function showError(message: string, timeInSeconds = 5) {
    setError(message);
    setTimeout(() => setError(""), timeInSeconds * 1000);
  }

  async function submit() {
    if (authType === "login") {
      if (login) {
        await login(email, password);
      }
    } else {
      if (password !== passwordConfirm) {
        showError("Senhas não conferem!");
        return;
      }

      if (register) {
        await register(email, password);
      }
    }
  }

  return (
    <div
      className={`${theme} ${
        theme === "dark" ? "bg-zinc-900" : "bg-white"
      } flex h-screen items-center justify-center`}
    >
      <div className="hidden md:block md:w-1/3 lg:w-1/2">
        <img
          className="h-screen w-full object-cover"
          src="https://cdn.wallpapersafari.com/39/72/Bxf5KJ.jpg"
          alt="Imagem de arranha-céus da tela de cadastro"
        />
      </div>

      <div className="m-5 w-full">
        <div className="w-full md:w-2/3 lg:h-1/2 flex justify-between items-center">
          <h1 className="text-zinc-800 dark:text-zinc-100 text-2xl font:bold mb-5 flex-grow-0">
            {authType === "login"
              ? "Entre com a sua conta"
              : "Cadastre-se na plataforma"}
          </h1>
          <div className="flex-grow"></div>
          <div className="flex-grow-0">
          <ChangeThemeButton
            theme={theme === undefined ? "" : theme}
            changeTheme={changeTheme}
          />
          </div>
        </div>

        {error ? (
          <div className="flex items-center bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg">
            {IconWarning(6)}
            <span className="ml-3">{error}</span>
          </div>
        ) : (
          false
        )}

        <div className="flex flex-col gap-y-1.5">
          <AuthInput
            label="Email"
            value={email}
            type="email"
            onChange={setEmail}
          />

          <AuthInput
            label="Senha"
            value={password}
            type="password"
            onChange={setPassword}
          />

          <AuthInput
            label="Confirmar Senha"
            type="password"
            value={passwordConfirm}
            onChange={setPasswordConfirm}
            notRender={authType === "login"}
          />
        </div>

        <button
          onClick={submit}
          className="w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6"
        >
          {authType === "login" ? "Entrar" : "Cadastrar"}
        </button>

        <hr className="my-6 border-gray-300 w-full" />

        <button
          onClick={loginGoogle}
          className={`
                    w-full bg-red-500 hover:bg-red-400
                    text-white rounded-lg px-4 py-3 mb-3
                `}
        >
          Entrar com Google
          {IconGoogle}
        </button>

        {authType === "login" ? (
          <p className="text-zinc-800 dark:text-zinc-100">
            Novo por aqui ?
            <a
              onClick={() => setAuthType("register")}
              className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer ml-1"
            >
              Cadastre-se gratuitamente
            </a>
          </p>
        ) : (
          <p className="text-zinc-800 dark:text-zinc-100">
            Já faz parte da nossa comunidade ?
            <a
              onClick={() => setAuthType("login")}
              className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer ml-1"
            >
              Entre com a sua conta
            </a>
          </p>
        )}
        
        <div className="flex justify-center fixed bottom-0 w-full">
          <p className="text-zinc-500">© 4 Monkeys Inc{Icon4MonkeysInc}</p>
        </div>

      </div>
    </div>
  );
}
