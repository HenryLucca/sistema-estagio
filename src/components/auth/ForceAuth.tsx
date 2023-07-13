import useAuth from "@/hooks/useContext/useAuth";
import Head from "next/head";
import { useRouter } from "next/router";

interface ForceAuthProps {
    children: React.ReactNode;
}

export default function ForceAuth(props: ForceAuthProps){

    const {user, loading} = useAuth();
    const router = useRouter();

    function renderContent(){
        return(
            <>
                <Head>
                    <script dangerouslySetInnerHTML={{
                        __html:`
                        if(!document.cookie?.includes("sistema-estagio-auth")){
                            window.location.href = "/auth"
                        }
                        `
                    }}
                />
                </Head>
                {props.children}
            </>
        )
    }

    function renderLoading() {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
            </div>
        )
    }

    if(!loading && user?.email){
        return renderContent();
    } else if(loading){
        return renderLoading();
    } else {
        router.push("/auth");
        return null;
    }
}