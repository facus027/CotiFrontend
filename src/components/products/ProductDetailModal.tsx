import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useLocation, useNavigate } from "react-router-dom"
import { useQuery } from '@tanstack/react-query';
import { getProductById } from '../../api/ProductApi';
import { formatCurrency } from '../../util';
import { useStore } from '../../store/store';
import { FaShoppingCart } from "react-icons/fa";


export default function ProductDetailModal() {


    const navigate = useNavigate()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const seeProduct = queryParams.get('seeProduct')
    const show = seeProduct ? true : false
    const productId = queryParams.get('productId')

    const { data, isLoading } = useQuery({
        queryKey: ['seeProduct', productId],
        queryFn: () => getProductById(+productId!)
    })
    const product = data



    const { addToOrder } = useStore()

    if (isLoading) return 'Cargando...'
    if (data) return (
        <>
            <Transition appear show={show} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={() => navigate(location.pathname, { replace: true })}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/60" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-20 items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-2 z-50">
                                    <Dialog.Title
                                        as="h3"
                                        className="font-black text-3xl "
                                    >

                                    </Dialog.Title>
                                    <div className="absolute">
                                        <img className="w-40 h-22 " alt="Logotipo CotillonSm" src="https://res.cloudinary.com/dwxwejuvu/image/upload/v1720015148/aje7gfpd898we6jjj07i.png" />
                                    </div>
                                    <div className=" min-h-44 bg-gray-100 flex items-center justify-center p-4 ">
                                        <div className="max-w-4xl w-full bg-white rounded overflow-hidden shadow-lg">
                                            <div>
                                                <img className=" w-64 h-64 justify-center items-center mx-auto bg-cover"
                                                    src={product.image}
                                                    alt={`ImagenDe_${product.name}`}
                                                    title={product.name}
                                                />
                                            </div>
                                            <div className="p-6">
                                                <h1 className="text-3xl font-gloria font-bold mb-4">{product.name}</h1>
                                                <p className="text-gray-700 font-baloo text-base mb-4">{product.description}</p>
                                                <div className="text-2xl font-bold font-chewy mb-4">{formatCurrency(product.price)}</div>

                                                <button
                                                    className="bg-amber-500 text-white text-2xl p-1 font-chewy tracking-wider font-light py-1 px-4 rounded hover:bg-amber-700 flex gap-1"
                                                    onClick={() => addToOrder(product)}
                                                >
                                                    Agregar <FaShoppingCart />
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
