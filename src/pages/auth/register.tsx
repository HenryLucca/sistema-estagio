import { useState } from "react";
import useAppData from "@/hooks/useContext/useAppData";
import RegisterType from "@/components/auth/RegisterType";

export default function register() {
  const [option, setOption] = useState<string | null>(null);
  const {theme} = useAppData(); // empty string is considered light mode

  return (
    <div>
      {option ? (
          <div>{option}</div>
          ) : (
          <RegisterType optionSelect={setOption}/>
      )}
    </div>
  );
}
