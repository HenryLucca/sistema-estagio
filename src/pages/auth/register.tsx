import { useState } from "react";
import useAppData from "@/hooks/useContext/useAppData";
import RegisterType from "@/components/register/RegisterType";

export default function register() {
  const [option, setOption] = useState<string | null>(null);
  const {theme} = useAppData(); // empty string is considered light mode

  return (
    <div>
    {option ? (
        option === "coordenador" ? (
            <h1>Coordenador</h1>
        ) : option === "empresa" ? (
            <h1>Empresa</h1>
        ) : option === "aluno" ? (
            <h1>Aluno</h1>
        ) : null
    ) : (
        <div className={theme}>
            <RegisterType optionSelect={setOption}/>
        </div>
    )}
    </div>
  );
}
