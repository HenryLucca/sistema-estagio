import Title from "./Title";

interface TopBarProps {
    title: string;
    subtitle: string;
}

export default function TopBar(props: TopBarProps){
    return (
        <div className={`flex border-stone-900`}>
            <Title title={props.title} subtitle={props.subtitle} />
            <div className="flex flex-grow justify-end items-center">
                <span>theme button here </span>
                <span>user avatar here </span>
            </div>
        </div>
    )
}