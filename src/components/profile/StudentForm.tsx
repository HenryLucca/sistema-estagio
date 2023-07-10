import useAppData from "@/hooks/useContext/useAppData";
import AuthInput from "../auth/AuthInput";
import { useState } from "react";

export default function FormProfile() {
  const { theme } = useAppData();
  const [name, setName] = useState("Nome Sobrenome");
  const [cpf, setCpf] = useState("123.456.789.00");
  const [address, setAddress] = useState("Rua dos Bobos, 0");
  return (
    <div>
      <form
        className={`${theme}
                h-full
                flex flex-col p-5
                rounded-lg
                bg-gray-200 dark:bg-gray-900
            `}
      >
        <div className="flex flex-wrap justify-center items-center gap-10">
            <AuthInput label="Nome" value={name} onChange={setName} />
            <AuthInput label="CPF" value={cpf} onChange={setCpf} />

            <AuthInput label="Endereço" value={address} onChange={setAddress} />
            <select name="" id=""></select>
        </div>
      </form>
    </div>
  );
}
