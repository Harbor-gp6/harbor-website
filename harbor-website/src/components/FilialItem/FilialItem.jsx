import { Typography } from "../Typography/Typography";

export function FilialItem({ image, title, address, state, onClick }) {
    return (
        <button onClick={onClick}>
            <div className="filial-item bg-gray-300 h-auto flex p-3 ">
                <img className="pr-3" src={image} alt="" srcset="" />
                <div className="flex flex-col justify-between text-start w-full">
                    <Typography color='black' className='font-medium' textPosition="left"> {title} </Typography>
                    <div>
                        <Typography color='black' textSize='base' textPosition="left">  {address} </Typography>
                        <Typography color='black' textSize='base' textPosition="left"> {state} </Typography>
                    </div>
                </div>
            </div>
        </button>
    );
}