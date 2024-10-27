import { useMemo } from "react";
import { useStore } from "../../store/store";
import { OrderItems } from "../../types";
import { formatCurrency } from "../../util";
import { XCircleIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";

type OrderPopupProps = {
    order: OrderItems[]
}

export default function OrderPopup({ order }: OrderPopupProps) {

    const discountCategory = 'disfraces'
    const perctDiscount = 10

    const { increaseQuantity, decreaseQuantity, removeItems } = useStore()
    const total = useMemo(
        () =>
            order.reduce((total, item) => {
                const itemTotal = item.category === discountCategory
                    ? item.quantity * item.price * (1 - perctDiscount / 100)
                    : item.quantity * item.price;
                return total + itemTotal;
            }, 0),
        [order]
    );

    return (
        <div className="absolute overflow-visible top-5 right-24 mt-10 w-64 bg-white border border-gray-300 shadow-lg rounded-lg z-40">
            {order.length > 0 ? (
                order.map(item => (
                    <div key={item.id} className="shadow space-y-1 p-4 bg-white border-t border-gray-200">
                        <div className="space-y-1">
                            <div className="flex justify-between items-start">
                                <p className="text-base font-gloria font-bold">{item.name}</p>
                                {item.category === discountCategory ? (
                                    <div>
                                        <p className="text-sm bg-yellow-pastel md:text-base font-luckiest font-extralight text-start">
                                            {`- %${perctDiscount} solo online`}
                                        </p>
                                        <p className="text-sm md:text-base font-chewy gap-2 flex text-amber-500 font-black text-start">
                                            {formatCurrency(item.price * (1 - perctDiscount / 100))}
                                            <span className="text-gray-500 text-sm">{formatCurrency(item.price)}</span>
                                        </p>
                                    </div>
                                ) : (
                                    <p className="text-xl md:text-2xl font-chewy text-amber-500 font-black text-start">
                                        {formatCurrency(item.price)}
                                    </p>
                                )}
                                <button
                                    type="button"
                                    onClick={() => removeItems(item.id)}
                                >
                                    <XCircleIcon className="text-red-600 h-5 w-5" />
                                </button>
                            </div>
                            <div className="flex flex-row gap-7">
                                <p className="text-base text-amber-500 font-black">
                                    {item.category === discountCategory
                                        ? formatCurrency(item.price * (1 - perctDiscount / 100))
                                        : formatCurrency(item.price)
                                    }
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

                                    <p className="text-sm font-black">{item.quantity}</p>

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
                                Subtotal:{' '}
                                {item.category === discountCategory
                                    ? formatCurrency(item.quantity * item.price * (1 - perctDiscount / 100))
                                    : formatCurrency(item.quantity * item.price)
                                }
                            </p>
                        </div>
                    </div>
                ))
            ) : (
                <p className="p-4 text-gray-600">El carrito está vacío</p>
            )}
            <p className="text-center text-base m-2">
                Total a Pagar:{' '}
                <span className="font-bold text-amber-500">{formatCurrency(total)}</span>
            </p>
            <div>
                <Link className="justify-center flex" to="/carrito">
                    <button className="py-1 bg-orange-dark font-chewy tracking-wider text-yellow-pastel rounded-lg border-gray-400 hover:text-white w-2/3 m-2">
                        Ir a carrito
                    </button>
                </Link>
            </div>
        </div>
    );

}
