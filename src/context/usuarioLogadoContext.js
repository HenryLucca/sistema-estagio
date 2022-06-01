// contexto que guarda qual usuario logado
import { createContext, useState } from 'react';

export const LogadoContext = createContext();

export const LogadoContextProvider = ({children}) => {

    const [logado, setLogado] = useState(null);

    return (
        <LogadoContext.Provider value={{logado, setLogado}}>
            {children}
        </LogadoContext.Provider>
    )
}

