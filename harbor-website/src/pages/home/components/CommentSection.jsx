/* eslint-disable react/no-unescaped-entities */
import tiagoImage from "../../../assets/tiago.svg";

export function CommentSection() {
  return (
    <div className="bg-[#6D6FFA] w-screen h-fit text-white">
      <div className="w-full h-full flex items-center justify-between mt-10">
        <div className="flex flex-col h-96 max-w-[600px] text-center pl-40">
          <p className="text-5xl">Quem conhece e confia na Harbor</p>
          <p className="text-3xl mt-12">
            "Por muito tempo me senti perdido com o meu negócio. Sinto que a
            Harbor me permite trabalhar de maneira mais assertiva e inteligente"
          </p>
          <p className="text-xl mt-8">
            -Tiago Romano do @barberSantiago, parceiro há mais de 2 meses.
          </p>
        </div>
        <div className="flex h-full w-full justify-end">
          <img className="" src={tiagoImage} alt="Imagem Tiago" />
        </div>
      </div>
    </div>
  );
}
