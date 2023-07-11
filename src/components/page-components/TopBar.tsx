import useAppData from "@/hooks/useContext/useAppData";
import ChangeThemeButton from "./ChangeThemeButton";
import Title from "./Title";
import useAuth from "@/hooks/useContext/useAuth";

interface TopBarProps {
    title: string;
    subtitle: string;
}

export default function TopBar(props: TopBarProps){
    const {theme, changeTheme} = useAppData(); // empty string is considered light mode
    const {user} = useAuth();
    const email = user?.email;

    return (
        <div className={`flex border-stone-900`}>
            <Title title={props.title} subtitle={props.subtitle} />
            <div className="flex flex-grow gap-2 justify-end items-center">
                <ChangeThemeButton theme={theme === undefined ? '' : theme} changeTheme={changeTheme}/>
                <span className="text-stone-900 dark:text-stone-100 font-bold mr-5">
                    {email}
                </span>
            </div>
        </div>
    )
}