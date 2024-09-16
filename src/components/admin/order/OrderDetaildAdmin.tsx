import { useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Order } from "../../../types"
import { formatCurrency } from "../../../util"
import { toast } from 'react-toastify';
import IconWhatsApp from "../../ui/IconWhatsApp"
import { updateStatusById } from "../../../api/OrderApi";
import ErrorMessage from "../ErrorMessage";


export default function OrderDetaildAdmin({ data }: { data: Order }) {

    const status = ['pendiente', 'pagado', 'para retirar', 'entregado']

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            status: ""
        }
    })

    const queryClient = useQueryClient()
    const { mutate } = useMutation({
        mutationFn: updateStatusById,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['ordersAdmin', status] })
            toast.success(data)

        }
    })

    const handleUpdateCategory = (formData: { status: string }) => {
        const updateOrder = {
            id: data.id,
            status: formData.status
        }
        console.log(updateOrder)
        mutate(updateOrder)
    }

    return (
        <div className=" w-full shadow-2xl rounded-2xl p-3">
            <div className=" border-dashed px-3 border-2 my-2 border-indigo-700">
                <h1 className="text-2xl ">Recibo de Orden</h1>
            </div>
            <div className="mb-3 flex justify-center items-center flex-row gap-14">
                <p>Nombre: <span>{data.name}</span></p>
                <p>Celular: <span><IconWhatsApp name={data.name} cel={data.cel} /></span></p>
                <p>Estado: <span>{data.status}</span> </p>
            </div>
            <div className="border-t-2 border-dashed border-indigo-700">
                <table className="w-full divide-y divide-gray-300">
                    <thead className="">
                        <tr className="">
                            <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                            >Cant.
                            </th>
                            <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                            >Nombre
                            </th>
                            <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                            >Descripcion
                            </th>

                        </tr>

                    </thead>
                    <tbody className="divide-y divide-gray-200">

                        {data.order.map(item => (
                            <tr key={item.id} >
                                <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                    {item.quantity}
                                </td>
                                <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                    {item.name}
                                </td>
                                <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                    {item.description}
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            <div className="border-dotted border-t-2 border-indigo-700 px-10 pt-2">
                <div className="mb-3 flex justify-center items-center flex-col">
                    <p>Medio de Pago: <span>'{data.wayToPay.toUpperCase()}'</span></p>


                    <p className="text-xl">Total: <span>{formatCurrency(data.total)}</span></p>

                </div>
            </div>
            <div className="border-dotted border-t-2 border-indigo-700 px-10 pt-2">
                <div className="mb-1 flex justify-center items-center flex-col">
                    <form
                        onSubmit={handleSubmit(handleUpdateCategory)}
                        noValidate
                        className="space-y-4"
                    >
                        <select id="status"
                            {...register("status", {
                                required: "El estado del Producto es obligatorio",
                            })}>
                            <option value="">{data.status.toUpperCase()}</option>

                            {status.map(statu => (
                                <option key={statu} value={statu}>{statu.toUpperCase()}</option>
                            ))}
                        </select>
                        {errors.status && (
                            <ErrorMessage>{errors.status.message}</ErrorMessage>
                        )}

                        <input
                            type="submit"
                            value="Actualizar Estado"
                            className=" bg-amber-600 hover:bg-amber-700 w-full p-3 text-white uppercase
                                             font-bold cursor-pointer transition-colors"
                        />

                    </form>
                </div>
            </div>

        </div>
    )
}
