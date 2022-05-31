// 1 - criar context
import { createContext, useState } from 'react';

export const LogadoContext = createContext();

export const LogadoContextProvider = ({children}) => {

    const [logado, setLogado] = useState('');

    return (
        <LogadoContext.Provider value={{logado, setLogado}}>
            {children}
        </LogadoContext.Provider>
    )
}

