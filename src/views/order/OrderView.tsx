import { useMemo } from "react"
import OrderDetails from "../../components/order/OrderDetails"
import { useStore } from "../../store/store"
import { formatCurrency } from './../../util/index';

export default function OrderView() {

    const { order } = useStore()
    const total = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

    return (
        <div className="mt-40">
            <h1 className="mx-20 font-bold text-2xl">Mi Carrito</h1>
            <div className=" rounded-lg flex mt-10 w-full mx-auto">
                <div className="flex flex-col w-2/3 mx-auto gap-2">
                    {order.length ? (
                        order.map(item => (
                            <div
                                className=""
                                key={item.id}>
                                <OrderDetails item={item} />
                            </div>
                        ))

                    ) : (
                        <p className="text-center text-2xl font-normal">No hay Productos en el Carrito</p>
                    )}
                </div>
                <div className="">
                    <aside className=" lg:overflow-y-scroll md:w-64 lg:w-80 p-5">
                        <p className="text-start text-2xl mb-5 ">
                            Total a Pagar: {''}
                            <span className="font-bold  text-amber-500">{formatCurrency(total)}</span>
                        </p>
                        <h2 className=" text-3xl font-serif border-t-2 border-gray-200">Contacto</h2>
                        <div className="mt-5">
                            <form className="flex flex-col gap-3" action="">

                                <input
                                    type="text"
                                    placeholder="Tu Nombre"
                                    className=" p-2 rounded-md bg-white border-gray-100 hover:border-gray-500 w-full mt-1"
                                    name="name"
                                />

                                <input
                                    type="text"
                                    placeholder="Tu Celular"
                                    className=" p-2 rounded-md bg-white border-gray-100 hover:border-gray-500 w-full mt-1"
                                    name="cel"
                                />

                                <input
                                    type="submit"
                                    className=" py-1 rounded uppercase text-center bg-amber-800 hover:bg-amber-700 text-white w-full mt-3 cursor-pointer"
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
