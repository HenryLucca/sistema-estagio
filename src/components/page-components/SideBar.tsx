import Image from "next/image";
import SideItem from "./SideItem";
import { IconHome, IconLogout, IconProfile } from "@/icons/icons";
import useAuth from "@/hooks/useContext/useAuth";

export default function SideBar() {

  const {logout } = useAuth();

  return (
    <aside className={`
    flex flex-col
    bg-gray-200 text-gray-700
    dark:bg-gray-900 dark:text-gray-200
    `}>
      <div
        className={`
                flex flex-col items-center justify-center
                bg-gradient-to-t from-indigo-300 via-blue-400 to-purple-900
                h-20 w-20 border-r-2 border-b-2 border-gray-600
            `}
      >
        <Image src="/logo_jpg.jpg" alt="Logo" width={280} height={64} />
      </div>
      
      <ul className="flex-grow">
        <SideItem text="Início" icon={IconHome} url="/" />
        <SideItem text="Perfil" icon={IconProfile} url="/profile" />
      </ul>
      
      <ul className={`flex`}>
        <SideItem
          text="Sair"
          icon={IconLogout}
          onClick={logout} 
          className={`
            text-red-600 dark:text-red-400
            hover:bg-red-400 hover:text-white dark:hover:text-white
            `}
        />
      </ul>
    </aside>
  );
}
