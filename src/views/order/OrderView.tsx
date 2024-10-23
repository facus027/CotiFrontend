import { useMemo } from "react"
import { useStore } from "../../store/store"
import { useForm } from 'react-hook-form'
import OrderDetails from "../../components/order/OrderDetails"
import { formatCurrency } from './../../util/index';
import { OrderFormData } from "../../types";
import ErrorMessage from "../../components/admin/ErrorMessage";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../api/OrderApi";
import BannerAnumateCarrito from "../../components/ui/BannerAnumateCarrito";


export default function OrderView() {

    const navigate = useNavigate()

    const { order } = useStore()
    const total = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            cel: "",
            wayToPay: ""
        }
    })

    const { mutate } = useMutation({
        mutationFn: createOrder,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            toast.success('La orden cargada con exito')
            navigate(`/checkout/${data}`)

        }
    })

    const handlerForm = (formData: OrderFormData) => {
        const data = {
            name: formData.name,
            cel: formData.cel,
            wayToPay: formData.wayToPay.toString(),
            total,
            order
        }
        mutate(data)


    }

    return (
        <div className="mt-7">
            <div className="flex flex-col items-start">
                <BannerAnumateCarrito />
                <p className="font-baloo text-sm">El servicio de Mercado Pago tiene un costo del (%6)</p>
            </div>

            <div className="rounded-lg flex flex-col lg:flex-row mt-5 w-full mx-auto">
                <div className="flex flex-col w-full m-3 lg:w-2/3 mx-auto gap-2">
                    {order.length ? (
                        order.map(item => (
                            <div key={item.id}>
                                <OrderDetails item={item} />
                            </div>
                        ))
                    ) : (
                        <p className="text-center font-baloo text-2xl font-normal">No hay Productos en el Carrito</p>
                    )}
                </div>

                <div className="lg:mt-0 mt-10 lg:w-1/3 w-full">
                    <aside className="lg:overflow-y-scroll p-5">
                        <p className="text-start font-baloo text-2xl mb-5">
                            Total a Pagar:
                            <span className="font-bold text-amber-500">{formatCurrency(total)}</span>
                        </p>
                        <h2 className="text-3xl font-luckiest tracking-wider border-t-2 border-gray-200">Contacto</h2>

                        <div className="mt-5">
                            <form className="flex flex-col gap-3" onSubmit={handleSubmit(handlerForm)} noValidate>
                                <input
                                    type="text"
                                    placeholder="Tu Nombre"
                                    className="p-2 rounded-md bg-white border-gray-100 hover:border-gray-500 w-full mt-1"
                                    {...register("name", { required: "El nombre es obligatorio" })}
                                />
                                {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

                                <input
                                    type="text"
                                    placeholder="Tu Celular"
                                    className="p-2 rounded-md bg-white border-gray-100 hover:border-gray-500 w-full mt-1"
                                    {...register("cel", { required: "El numero es obligatorio" })}
                                />
                                {errors.cel && <ErrorMessage>{errors.cel.message}</ErrorMessage>}

                                <legend>Metodo de pago:</legend>

                                <label className="flex gap-2">
                                    <input type="checkbox" value='mercado pago'
                                        {...register("wayToPay", { required: "El metodo de pago es obligatorio" })}
                                    />
                                    Mercado Pago
                                </label>
                                {errors.wayToPay && <ErrorMessage>{errors.wayToPay.message}</ErrorMessage>}

                                <label className="flex gap-2">
                                    <input type="checkbox" value='pago efectivo'
                                        {...register("wayToPay", { required: "El metodo de pago es obligatorio" })}
                                    />
                                    Pago en efectivo
                                </label>

                                <input
                                    type="submit"
                                    className="py-1 rounded font-chewy tracking-wider uppercase text-center bg-amber-800 hover:bg-amber-700 text-white w-full mt-3 cursor-pointer"
                                    value="Confirmar Orden"
                                />
                            </form>
                        </div>
                    </aside>
                </div>
            </div>
        </div>

    )
}
