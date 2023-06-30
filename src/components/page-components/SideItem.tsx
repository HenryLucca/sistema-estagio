import Link from "next/link";

interface SideItemProps {
  url?: string; // where do we want to go when we click on the menu item
  text: string; // what text do we want to show on the menu item
  icon: any; // what icon do we want to show on the menu item
  className?: string; 
  onClick?: (e: any) => void;
}

export default function SideItem(props: SideItemProps) {
  function renderLink() {
    return (
      <a
        className={`
            flex flex-col justify-center items-center
            h-20 w-20 
            text-gray-600
            dark:text-gray-200
            ${props.className}
        `}
      >
        {props.icon}
        <span
          className={`
                text-xs font-light 
                `}
        >
          {props.text}
        </span>
      </a>
    );
  }

  return (
    <li onClick={props.onClick} className={`
            hover:bg-gray-100 dark:hover:bg-gray-800
            cursos-pointer
        `}
    >
      {props.url ? (
        <Link href={props.url} legacyBehavior>
          {renderLink()}
        </Link>
      ) : (
        renderLink()
      )}
    </li>
  );
}
