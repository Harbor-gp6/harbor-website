import { Typography } from "../Typography/Typography";

export function PrestadorItem({ image, nome, onClick }) {
    return (
        <button onClick={onClick} className="flex justify-center ">
            <div className="filial-item hover:bg-gray-300 h-auto w-fit flex justify-center flex-col p-7 rounded-xl ">
                <img className="rounded-full" src={image} alt="" srcset="" />
                <div className="text-start">
                </div>
                <Typography color='black' className='font-medium max-w-fit pt-3' textPosition="left" > {nome} </Typography>
            </div>
        </button>
    );
}