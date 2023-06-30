import useAppData from "@/hooks/useContext/useAppData";
import ChangeThemeButton from "./ChangeThemeButton";
import Title from "./Title";

interface TopBarProps {
    title: string;
    subtitle: string;
}

export default function TopBar(props: TopBarProps){
    const {theme, changeTheme} = useAppData(); // empty string is considered light mode

    return (
        <div className={`flex border-stone-900`}>
            <Title title={props.title} subtitle={props.subtitle} />
            <div className="flex flex-grow justify-end items-center">
                <ChangeThemeButton theme={theme === undefined ? '' : theme} changeTheme={changeTheme}/>
                <span>user avatar here </span>
            </div>
        </div>
    )
}