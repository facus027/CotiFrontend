import { useNavigate } from "react-router-dom";
import { Product } from "../../types";
import { formatCurrency } from "../../util";
import { FaShoppingCart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useStore } from "../../store/store";


export default function CardProduct({ product }: { product: Product }) {

    const navigate = useNavigate()

    const { addToOrder } = useStore()

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div className=" overflow-hidden">
                <img className="w-full h-48 object-cover hover:scale-125 transition-transform hover:rotate-2" src={product.image} alt={product.name} />
                <div className="absolute">
                    <img className="w-32 h-14 ml-36 -mt-10" alt="Logotipo CotillonSm" src="https://res.cloudinary.com/dwxwejuvu/image/upload/v1720015148/aje7gfpd898we6jjj07i.png" />
                </div>
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-base mb-2">{product.name}</div>
                <p className="text-gray-700 text-sm">{product.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {formatCurrency(product.price)}
                </span>
                <div className="flex gap-1 justify-between mt-2 items-center mx-auto">
                    <button
                        className="bg-amber-500 text-white font-bold py-1 px-4 rounded hover:bg-amber-700 flex gap-1"
                        onClick={() => addToOrder(product)}
                    >
                        Agregar <FaShoppingCart />
                    </button>
                    <button
                        onClick={() => navigate(location.pathname + '?seeProduct=true' + `&productId=${product.id}`)}
                        className="bg-amber-500 text-white font-bold py-1 px-4 rounded hover:bg-amber-700 flex gap-1">
                        ver <FaEye />
                    </button>
                </div>
            </div>
        </div>
    );
}
