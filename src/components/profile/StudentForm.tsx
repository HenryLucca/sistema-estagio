import useAppData from "@/hooks/useContext/useAppData";
import AuthInput from "../auth/AuthInput";
import { useEffect, useState } from "react";
import Select from "react-select";
import Student from "@/model/Student";
import useAuth from "@/hooks/useContext/useAuth";

export default function FormProfile() {
  const { theme } = useAppData();
  const { user } = useAuth();
  const [name, setName] = useState("Nome Sobrenome");
  const [cpf, setCpf] = useState("123.456.789.00");
  const [address, setAddress] = useState("Rua dos Bobos, 0");

  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [situationError, setSituationError] = useState(false);

  const situationOptions = [
    // situation can only be "Searching for internship", "Internship in progress" or "Unemployed"
    { value: "searching", label: "Buscando Estágio" },
    { value: "inProgress", label: "Estágio em Andamento" },
    { value: "unemployed", label: "Desempregado" },
  ];

  async function submitHandler(e: any) {
    e.preventDefault();
    if (selectedOption === null) {
      setSituationError(true);
      return;
    } else{
      setSituationError(false);
    }

    const student = new Student(
      user?.uid,
      name,
      cpf,
      address,
      selectedOption,
    );

    const submitRes = await fetch("/api/validateUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });

    const submitData = await submitRes.json();

  }

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
          <div className="flex flex-col gap-3">
            <AuthInput label="Nome" value={name} onChange={setName} />
            <AuthInput label="CPF" value={cpf} onChange={setCpf} />
            <AuthInput label="Endereço" value={address} onChange={setAddress} />
          </div>

          <div className="w-1/2 relative">
            <label className="text-zinc-900 dark:text-zinc-100">Situação</label>
            <Select
              styles={{
                control: (provided, state) => ({
                  ...provided,
                  backgroundColor: "#d1d5db",
                  color: "#18181b",
                }),
                indicatorSeparator(base, props) {
                  return {
                    ...base,
                    backgroundColor: "#18181b",
                    
                  };
                },
                dropdownIndicator(base, props) {
                  return {
                    ...base,
                    color: "#18181b",
                  };
                },
                option: (provided, state) => ({
                  ...provided,
                  backgroundColor: state.isSelected ? "#d1d5db" : "#f9fafb",
                  color: "#18181b",
                }),

              }}
              classNamePrefix="text-zinc-900"
              defaultValue={selectedOption}
              onChange={(newValue) => setSelectedOption(newValue.value)}
              options={situationOptions}
              placeholder="Situação"
            />
            {situationError && (
              <span className="text-red-500 font-extralight absolute mt-1">Situação é obrigatório</span>
            )}
          </div>
        </div>
        <hr className="mx-7 my-4 border-gray-300" />
        <div className="flex justify-center mt-10">
          <button
            onClick={submitHandler}
            type="submit"
            className={`
                    px-4 py-3 rounded-lg bg-gray-300
                    border focus:border-blue-500 focus:bg-white
                    focus:outline-none text-zinc-900
                `}
          >
            Salvar
          </button>
        </div>
      </form>
      
    </div>
  );
}
