import { OrderItems } from "../../types"
import { XCircleIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { formatCurrency } from "../../util"
import { useStore } from "../../store/store"


type OrderDetailsProps = {
    item: OrderItems
    perctDiscount: number
    discountCategory: string
}

export default function OrderDetails({ item, perctDiscount, discountCategory }: OrderDetailsProps) {

    const { increaseQuantity, decreaseQuantity, removeItems } = useStore()

    return (
        <div className="shadow space-y-1 p-4 bg-white border-t border-gray-200">
            <div className="space-y-4">
                <div className="flex flex-col md:flex-row justify-start items-center mx-auto gap-4">
                    <div className="flex-shrink-0">
                        <img className="h-24 w-36"
                            src={item.image}
                            alt={`ImagenDe_${item.name}`}
                            title={item.name}
                        />
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center md:gap-3 w-full">
                        <div className="grid grid-cols-2 md:grid-cols-2 justify-center gap-2">
                            <div>
                                <h2 className="text-lg md:text-xl font-gloria font-semibold text-start">{item.name}</h2>

                                {item.category === discountCategory ? (
                                    <div>
                                        <p className="text-base bg-yellow-pastel md:text-lg font-luckiest font-extralight text-start">
                                            {`- %${perctDiscount} solo online`}
                                        </p>
                                        <p className="text-lg md:text-2xl font-chewy gap-2 flex text-amber-500 font-black text-start">
                                            {formatCurrency(item.price * (1 - perctDiscount / 100))}
                                            <span className="text-gray-500 text-sm">{formatCurrency(item.price)}</span>
                                        </p>
                                    </div>
                                ) : (
                                    <p className="text-xl md:text-2xl font-chewy text-amber-500 font-black text-start">
                                        {formatCurrency(item.price)}
                                    </p>
                                )}
                            </div>
                            <button
                                type="button"
                                onClick={() => removeItems(item.id)}
                                className="mt-2 md:mt-0"
                            >
                                <XCircleIcon className="text-red-600 h-8 w-8" />
                            </button>
                        </div>

                        <div className="mt-4 md:mt-0 mr-10 flex justify-between items-center w-full md:w-auto gap-5">
                            <div className="flex gap-5 px-4 py-2 bg-gray-100 w-fit rounded-lg">
                                <button
                                    type="button"
                                    onClick={() => decreaseQuantity(item.id)}
                                    className="disabled:opacity-50"
                                    disabled={item.quantity <= 1}
                                >
                                    <MinusIcon className="h-6 w-6" />
                                </button>

                                <p className="text-lg font-chewy font-black">{item.quantity}</p>

                                <button
                                    type="button"
                                    onClick={() => increaseQuantity(item.id)}
                                    className="disabled:opacity-50"
                                    disabled={item.quantity >= 5}
                                >
                                    <PlusIcon className="h-6 w-6" />
                                </button>
                            </div>

                            <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-auto gap-4">
                                <p className="text-lg md:text-xl font-black flex flex-col justify-center text-gray-700">
                                    Subtotal:{' '}
                                    <span className="font-normal font-chewy ml-2">
                                        {item.category === discountCategory
                                            ? formatCurrency(item.price * item.quantity * (1 - perctDiscount / 100))
                                            : formatCurrency(item.price * item.quantity)}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
