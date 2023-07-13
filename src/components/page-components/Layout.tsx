import useAppData from "@/hooks/useContext/useAppData";
import Content from "./Content";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import ForceAuth from "../auth/ForceAuth";

interface LayoutProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { theme } = useAppData();
  return (
    <ForceAuth>
      <div className={`${theme} flex h-screen w-screen`}>
        <SideBar />
        <div
          className={`flex flex-col w-full p-7
                      border-t-4 border-gray-900
                      bg-gray-300 dark:bg-gray-800
                      text-gray-800 dark:text-gray-200`}
        >
          <TopBar title={props.title} subtitle={props.subtitle} />
          <Content>{props.children}</Content>
        </div>
      </div>
    </ForceAuth>
  );
}
