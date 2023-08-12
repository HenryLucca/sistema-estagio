import useAuth from "@/hooks/useContext/useAuth";
import UserData from "@/model/UserData";
import {createContext, use, useEffect, useState} from "react";

interface UserDataContextProps {
    userData?: UserData;
    setUserData?: (userData: UserData | undefined) => void;
}

const UserDataContext = createContext<UserDataContextProps>({});

export function UserDataProvider(props: any) {
    const [userData, setUserData] = useState<UserData | undefined>(undefined);
    const { user } = useAuth();

    async function getUserData(): Promise<void> {
        if (user) {
            const response = await fetch(`/api/users/${user.uid}`);
            if(response.status === 200){
                const data = await response.json();
            } else if(response.status === 404){
                setUserData(undefined);
            }
        }
    }

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <UserDataContext.Provider value={{userData, setUserData}}>
            {props.children}
        </UserDataContext.Provider>
    );
}

export default UserDataContext;