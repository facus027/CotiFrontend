import { useMemo } from "react";
import { useStore } from "../../store/store";
import { OrderItems } from "../../types";
import { formatCurrency } from "../../util";
import { XCircleIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline'

type OrderPopupProps = {
    order: OrderItems[]
}

export default function OrderPopup({ order }: OrderPopupProps) {

    const { increaseQuantity, decreaseQuantity, removeItems } = useStore()
    const total = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])


    return (
        <div className="absolute top-3 right-32 mt-10 w-64 bg-white border border-gray-300 shadow-lg rounded-lg z-40">
            {order.length > 0 ? (
                order.map(item => (
                    <div className="shadow space-y-1 p-4 bg-white  border-t border-gray-200 ">
                        <div className="space-y-1">
                            <div className="flex justify-between items-start">
                                <p className="text-base font-bold">{item.name} </p>

                                <button
                                    type="button"
                                    onClick={() => removeItems(item.id)}
                                >
                                    <XCircleIcon className="text-red-600 h-5 w-5" />
                                </button>
                            </div>
                            <div className="flex flex-row gap-7">
                                <p className="text-base text-amber-500 font-black">
                                    {formatCurrency(item.price)}
                                </p>
                                <div className="flex gap-3 px-5 py-2 bg-gray-100 w-fit rounded-lg">
                                    <button
                                        type="button"
                                        onClick={() => decreaseQuantity(item.id)}
                                        className="disabled:opacity-10"
                                        disabled={item.quantity <= 1}
                                    >
                                        <MinusIcon className="h-2 w-2" />
                                    </button>

                                    <p className="text-sm font-black ">
                                        {item.quantity}
                                    </p>

                                    <button
                                        type="button"
                                        onClick={() => increaseQuantity(item.id)}
                                        className="disabled:opacity-10"
                                        disabled={item.quantity >= 5}
                                    >
                                        <PlusIcon className="h-2 w-2" />
                                    </button>
                                </div>

                            </div>

                            <p className="text-base font-black text-gray-700">
                                Subtotal: {formatCurrency(item.subtotal)}
                                <span className="font-normal">

                                </span>
                            </p>
                        </div>
                    </div>
                ))
            ) : (
                <p className="p-4 text-gray-600">El carrito está vacío</p>
            )}
            <p className="text-center text-base m-2 ">
                Total a Pagar: {''}
                <span className="font-bold  text-amber-500">{formatCurrency(total)}</span>
            </p>
        </div>
    )
}
