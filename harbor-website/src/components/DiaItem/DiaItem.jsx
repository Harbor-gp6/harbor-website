import { Typography } from "../Typography/Typography";

export function DiaItem({ semana, dia}) {
    return (
        <div className="after:bg-black h-20 w-20 min-w-20 bg-gray-200 text-center flex flex-col items-center justify-center">
            <Typography className="" color="black" >{semana}</Typography>
            <Typography className="" color="black" >{dia}</Typography>
        </div>
    );
}