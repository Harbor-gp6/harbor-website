/* eslint-disable react/no-unescaped-entities */
import tiagoImage from '../../../assets/tiago.svg'

export function CommentSection() {
    return (
        <div className="display: flex bg-[#6D6FFA] w-full h-screen text-white">
            <div className='h-full flex items-center justify-center'>
            <div className='display: flex flex-col box-content pr-4 pl-10 h-full w-2/4 justify-center'>
                <p className="text-5xl">Quem conhece e confia na Harbor</p>
                <p className="text-3xl mt-12">"Por muito tempo me senti perdido com o meu negócio. Sinto que a Harbor me permite trabalhar de maneira mais assertiva e inteligente"</p>
            </div>
            <div className='flex h-full items-end w-2/4 pl-4'>
                <img className='' src={tiagoImage} alt="Imagem Tiago" />
            </div>
            </div>
        </div>
    )
}
