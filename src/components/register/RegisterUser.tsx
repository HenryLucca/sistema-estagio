import { useEffect, useState } from "react";
import useAppData from "@/hooks/useContext/useAppData";
import SelectProfileType from "@/components/register/SelectProfileType";
import { useRouter } from "next/router";
import useAuth from "@/hooks/useContext/useAuth";
import useUserData from "@/hooks/useContext/useUserData";
import UserData from "@/model/UserData";

export default function RegisterUser() {
  const router = useRouter();
  const { user } = useAuth();
  const [userType, setUserType] = useState<string | null>(null);
  const { theme } = useAppData(); // empty string is considered light mode
  const { userData, setUserData } = useUserData();

  useEffect(() => {
    async function registerUser() {
      // console.log(userType);
      // register user
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, userType }),
      });
      
      if (res.status === 200) {
        const data = await res.json();
        console.log(data);
        const userData: UserData = {
          uid: user?.uid,
          name: data.name,
          cpf: data.cpf,
          type: data.type,
        };
        setUserData(userData);
        router.push("/");
      }
    }

    registerUser();
  }, [userType, user]);

  return (
    <div className={theme}>
      <SelectProfileType userTypeSelect={setUserType} />
    </div>
  );
}