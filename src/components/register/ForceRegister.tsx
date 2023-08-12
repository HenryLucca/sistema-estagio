import { useState, useEffect } from "react";
import useUserData from "@/hooks/useContext/useUserData";
import RegisterUser from "./RegisterUser";

interface ForceRegisterProps {
  children: React.ReactNode;
}

export default function ForceRegister(props: ForceRegisterProps) {
  const { userData, setUserData } = useUserData();
  // query the database to see if the user is registered
  // if not, render the register component
  // if yes, render the children
  useEffect(() => {
    async function getUserData() {
      const res = await fetch(`/api/login`);
      if (res.status === 200) {
        const data = await res.json();
        const userDataModel = {
          uid: data.uid,
          name: data.name,
          cpf: data.cpf,
          type: data.type,
        };
        setUserData(userDataModel);
      } else if (res.status === 404) {
        setUserData(undefined);
      }
    }
    getUserData();
  }, []);

  function renderContent() {
    return <>{props.children}</>;
  }

  function renderRegister() {
    return <RegisterUser />;
  }

  if (userData === null || typeof userData === "undefined") {
    return renderRegister();
  } else {
    return renderContent();
  }
}