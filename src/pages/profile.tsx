import Layout from "@/components/page-components/Layout";
import StudentForm from "@/components/profile/StudentForm";
import useAppData from "@/hooks/useContext/useAppData";

export default function Profile(){
    const {theme} = useAppData();
    return (
        <Layout title="Perfil" subtitle="Gerencie suas informações">
            {/* <div className={`
                ${theme}
                h-fill
                flex flex-col
                bg-gray-200 dark:bg-gray-900
            `}>
            </div> */}
                <StudentForm />
        </Layout>
    )
}