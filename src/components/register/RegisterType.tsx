import utilizador from "@/../public/card-images/utilizador.png";
import construcao from "@/../public/card-images/construcao.png";
import chapeu_de_graduacao from "@/../public/card-images/chapeu-de-graduacao.png";
import Image from "next/image";
import useAppData from "@/hooks/useContext/useAppData";

interface ProfileType {
  optionSelect: (option: string) => void;
}

export default function ProfileType(props: ProfileType) {
  const { theme } = useAppData();

  return (
    <div
      className={`
            bg-white dark:bg-zinc-900
            h-screen w-screen
            flex flex-col items-center justify-center
        `}
    >
      <h1 className="text-zinc-800 dark:text-zinc-100 text-4xl mb-16">
        Deseja se cadastrar como:
      </h1>

      <div className="flex items-center justify-center">
        <div
          onClick={() => props.optionSelect("coordenador")}
          className={`
                    bg-zinc-200 dark:bg-zinc-800 mx-8 
                    flex items-center justify-center rounded-2xl
                    `}
        >
          <div className="flex flex-col items-center p-4">
            <Image
              src={utilizador}
              alt="coordenador-icon"
              className="w-auto lg:h-44 md:h-44 sm:h-24 mx-2"
            />
            <h2 className="mt-6 text-zinc-800 dark:text-zinc-100 text-lg">
              Coordenador
            </h2>
          </div>
        </div>

        <div
          onClick={() => props.optionSelect("empresa")}
          className={`
                    bg-zinc-200 dark:bg-zinc-800 mx-8
                    flex items-center justify-center rounded-2xl
                `}
        >
          <div className="flex flex-col items-center p-5">
            <Image
              src={construcao}
              alt="empresa-icon"
              className="w-auto lg:h-44 md:h-44 sm:h-24 mx-2"
            />
            <h2 className="mt-6 text-zinc-800 dark:text-zinc-100 text-lg">
              Empresa
            </h2>
          </div>
        </div>

        <div
          onClick={() => props.optionSelect("aluno")}
          className={`
                    bg-zinc-200 dark:bg-zinc-800 mx-8 
                    flex items-center justify-center rounded-2xl
                `}
        >
          <div className="flex flex-col items-center p-5">
            <Image
              src={chapeu_de_graduacao}
              alt="estagiario-icon"
              className="w-auto lg:h-44 md:h-44 sm:h-24 mx-2"
            />
            <h2 className="mt-6 text-zinc-800 dark:text-zinc-100 text-lg">
              Estágiario
            </h2>
          </div>
        </div>
      </div>
      <h4 className="text-zinc-400 dark:text-zinc-400 fixed bottom-0">4 Monkeys Inc. ©</h4>
    </div>
  );
}
