import Content from "./Content";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

interface LayoutProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className={`flex h-screen w-screen`}>
      <SideBar />
      <div>
        <TopBar title={props.title} subtitle={props.subtitle} />
        <Content>{props.children}</Content>
      </div>
    </div>
  );
}
