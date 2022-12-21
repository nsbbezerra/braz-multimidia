import Image from "next/image";

interface Props {
  origin: "abada" | "ciclismo" | "pesca" | "esportivo";
}

export default function Specs({ origin }: Props) {
  function handleOrigin() {
    switch (origin) {
      case "abada":
        return { url: "/img/abada/estampa.png", text: "abadá" };

      case "ciclismo":
        return { url: "/img/ciclismo/estampa.png", text: "uniforme" };

      case "esportivo":
        return { url: "/img/esportivo/estampa.png", text: "uniforme" };

      case "pesca":
        return { url: "/img/pesca/estampa.png", text: "uniforme" };

      default:
        return { url: "/img/abada/estampa.png", text: "abadá" };
    }
  }

  return (
    <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5 select-none">
      <div className="bg-zinc-100 p-6 rounded-md grid grid-cols-[80px_1fr] md:grid-cols-1 justify-items-center justify-start gap-2 text-center">
        <div className="w-full md:w-36">
          <Image
            src={"/img/abada/tecido.png"}
            width={200}
            height={200}
            alt="Braz Multimidia banner"
            layout="responsive"
          />
        </div>
        <div className="flex flex-col items-start text-justify md:text-center md:items-center">
          <strong className="text-lg sm:text-2xl">TECIDO DRYFIT</strong>
          <span className="sm:text-lg">
            A tecnologia DryFit proporciona maior troca de calor com o ambiente,
            deixando seu {handleOrigin().text} sempre mais leve, pois não
            acumula suor.
          </span>
        </div>
      </div>

      <div className="bg-zinc-100 p-6 rounded-md grid grid-cols-[80px_1fr] md:grid-cols-1 justify-items-center justify-start gap-2 text-center">
        <div className="w-full md:w-36">
          <Image
            src={handleOrigin().url}
            width={200}
            height={200}
            alt="Braz Multimidia banner"
            layout="responsive"
          />
        </div>
        <div className="flex flex-col items-start text-justify md:text-center md:items-center">
          <strong className="text-lg sm:text-2xl">ESTAMPAS DE QUALIDADE</strong>
          <span className="sm:text-lg">
            Prezamos pela qualidade de nossos produtos, nossos{" "}
            {handleOrigin().text}s personalizados possuem estampas realizadas
            com qualidade fotográfica.
          </span>
        </div>
      </div>

      <div className="bg-zinc-100 p-6 rounded-md grid grid-cols-[80px_1fr] md:grid-cols-1 justify-items-center justify-start gap-2 text-center">
        <div className="w-[80px] h-[80px] md:w-36 md:h-36 rounded-full bg-white">
          <Image
            src={"/img/abada/uv.png"}
            width={200}
            height={200}
            alt="Braz Multimidia banner"
            layout="responsive"
          />
        </div>
        <div className="flex flex-col items-start text-justify md:text-center md:items-center">
          <strong className="text-lg sm:text-2xl">PROTEÇÃO UV</strong>
          <span className="sm:text-lg">
            Além do conforto do tecido especial DryFit, nossos{" "}
            {handleOrigin().text}s possuem proteção solar, o que garante horas
            de diversão mesmo sob o sol.
          </span>
        </div>
      </div>
    </div>
  );
}
