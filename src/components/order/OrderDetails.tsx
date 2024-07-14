import { OrderItems } from "../../types"
import { XCircleIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { formatCurrency } from "../../util"
import { useStore } from "../../store/store"


type OrderDetailsProps = {
    item: OrderItems
}

export default function OrderDetails({ item }: OrderDetailsProps) {

    const { increaseQuantity, decreaseQuantity, removeItems } = useStore()

    return (
        <div className="shadow space-y-1 p-4 bg-white  border-t border-gray-200 ">
            <div className="space-y-4">
                <div className="flex justify-start items-center mx-auto">
                    <div className="">
                        <img className="h-24 w-36" src={item.image} alt={`Imagen_De_${item.name}`} />
                    </div>

                    <div className="flex flex-row gap-7 items-center">
                        <div className=" grid grid-cols-2 justify-center gap-6 ml-10">

                            <p className="text-xl font-bold text-start">{item.name} </p>

                            <p className="text-2xl text-amber-500 font-black text-start">
                                {formatCurrency(item.price)}
                            </p>
                        </div>
                        <div className=" flex justify-around gap-20">
                            <div className="flex gap-5 px-10 py-2 bg-gray-100 w-fit rounded-lg">
                                <button
                                    type="button"
                                    onClick={() => decreaseQuantity(item.id)}
                                    className="disabled:opacity-10"
                                    disabled={item.quantity <= 1}
                                >
                                    <MinusIcon className="h-6 w-6" />
                                </button>

                                <p className="text-lg font-black ">
                                    {item.quantity}
                                </p>

                                <button
                                    type="button"
                                    onClick={() => increaseQuantity(item.id)}
                                    className="disabled:opacity-10"
                                    disabled={item.quantity >= 5}
                                >
                                    <PlusIcon className="h-6 w-6" />
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-center gap-4 mx-auto">
                            <p className="text-xl font-black flex flex-col justify-center text-gray-700 ">
                                Subtotal: {''}
                                <span className="font-normal ml-5">
                                    {formatCurrency(item.price)}
                                </span>
                            </p>
                            <button
                                type="button"
                                onClick={() => removeItems(item.id)}
                            >
                                <XCircleIcon className="text-red-600 h-8 w-8" />
                            </button>
                        </div>
                    </div>


                </div>

            </div>
        </div >
    )
}
