import { Link } from "react-router-dom";
import { Product } from "../../../types";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { formatCurrency } from "../../../util";
import { deleteProduct, updateAvailabilityProduct } from "../../../api/ProductApi";
import { toast } from "react-toastify";
import { useState } from "react";
import PopupImg from './PopupImg';


export default function TableProducts({ product }: { product: Product }) {

    const [isHovered, setIsHovered] = useState(false);

    const queryClient = useQueryClient()
    const { mutate } = useMutation({
        mutationFn: updateAvailabilityProduct,
        onError: () => {

        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] })
        }
    })

    const queryDelete = useMutation({
        mutationFn: deleteProduct,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['products'] })
            toast.success(data)
        }
    })

    const handleDelete = (productId: Product['id']) => {
        queryDelete.mutate(productId)
    }

    return (
        <tbody className="divide-y divide-gray-200">
            <tr >
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                    <div className='p-1 rounded-full'
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                        {product.name}
                    </div>
                    <div className='relative bottom-24 left-8'
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                        {isHovered && <PopupImg img={product.image} />}
                    </div>
                </td>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                    {product.description}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {formatCurrency(product.price)}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">

                    <button
                        type="button"
                        onClick={() => mutate(product.id)}
                        className={`${product.availability ? 'text-black ' : 'text-red-600'} 
                             rounded-lg p-2 text-xs uppercase font-bold w-1/2 item-center border border-gray-300 whitespace-nowrap`}
                    >
                        {product.availability ? 'Disponible' : 'No Disponible'}
                    </button>


                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {product.category}
                </td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                    <Link
                        to={`/admin/${product.id}/edit`}
                        className=" text-indigo-600 hover:text-indigo-800"
                    >
                        Editar <span className="sr-only">, {product.name}</span>
                    </Link>
                </td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                    <button
                        type="button"
                        onClick={() => handleDelete(product.id)}
                        className=" text-red-600 hover:text-red-700"
                    >
                        Eliminar <span className="sr-only">, {product.name}</span>
                    </button>
                </td>
            </tr>
        </tbody>

    )
}
