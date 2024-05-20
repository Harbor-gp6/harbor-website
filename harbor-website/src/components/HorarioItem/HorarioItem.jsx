import { Typography } from "../Typography/Typography";

export function HorarioItem({ horario }) {
    return (
        <div className="h-10 w-20 min-w-20 mt-4 bg-gray-200 text-center flex items-center justify-center">
            <Typography className="" color="black" >{horario}</Typography>
        </div>
    );
}