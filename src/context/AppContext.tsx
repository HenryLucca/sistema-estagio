import { createContext, useEffect, useState } from "react";

interface AppContextProps {
    theme?: string;
    changeTheme: () => void;
}

const AppContext = createContext<AppContextProps>({
    theme: '',
    changeTheme: () => null
});

export function AppProvider(props: any){

    const [theme, setTheme] = useState('dark'); 

    function changeTheme(){
        const newTheme = theme === 'dark' ? '' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        setTheme(theme ?? '');
    }, []);

    return (
        <AppContext.Provider value={{
            theme,
            changeTheme
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext;