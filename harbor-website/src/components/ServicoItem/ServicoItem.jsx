import { Typography } from "../Typography/Typography";
import { ModalHorarios } from "../ModalHorarios/ModalHorarios";

export function ServicoItem({title, description, price }) {
    return (
            <div className="filial-item bg-gray-300 h-auto block p-3 w-full sm:flex mb-3">
                <div className="flex flex-col justify-between text-start w-full ">
                    <Typography color='black' className='font-medium' textPosition="left"> {title} </Typography>
                    <div>
                        <Typography color='black' textSize='base' textPosition="left">  {description} </Typography>
                        <Typography color='black' textSize='base' textPosition="left"> {price} </Typography>
                    </div>
                    
                </div>

                <div className="w-full max-w-32 flex items-center pt-5 sm:pt-0">
                    <ModalHorarios />
                </div>
                 

            </div>
    );
}