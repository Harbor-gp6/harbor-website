import { Typography } from "../Typography/Typography"
import { ModalHorarios } from "../ModalHorarios/ModalHorarios"

export function ServicoItem({ title, description, price, selectedEmployee, serviceTime, onChangePage, onSelectService, serviceList, totalValue, totalTime, nameValue, surnameValue, cpfValue, phoneValue, onChange, emailValue, onSubmit }) {
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
                <ModalHorarios
                    serviceEmployee={selectedEmployee}
                    serviceTime={serviceTime}
                    onSelectService={onSelectService}
                    onChangePage={onChangePage}
                    serviceList={serviceList}
                    totalTime={totalTime}
                    totalValue={totalValue}
                    cpfValue={cpfValue}
                    nameValue={nameValue}
                    phoneValue={phoneValue}
                    surnameValue={surnameValue}
                    onChange={onChange}
                    emailValue={emailValue}
                    onSubmit={onSubmit}
                />
            </div>


        </div>
    )
}
