import { useNavigate } from "react-router-dom";
import { Product } from "../../types";
import { formatCurrency } from "../../util";
import { FaShoppingCart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useStore } from "../../store/store";
import { toast } from "react-toastify";


export default function CardProduct({ product }: { product: Product }) {

    const navigate = useNavigate()

    const { addToOrder } = useStore()

    function handlerToAdd(product: Product) {
        toast.success('Producto Agregado al Carrito')
        addToOrder(product)
    }

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div className=" overflow-hidden">
                <img className="w-full h-48 bg-cover px-4 hover:scale-125 transition-transform hover:rotate-2"
                    src={product.image}
                    alt={`imagenDe_${product.name}`}
                    title={product.name}
                />
                <div className="absolute">
                    <img className="w-32 h-14 ml-24 -mt-10"
                        alt="Logotipo CotillonSm"
                        src="https://res.cloudinary.com/dwxwejuvu/image/upload/v1720015148/aje7gfpd898we6jjj07i.png"
                        title="Logotipo CotillonSm"
                    />
                </div>
            </div>
            <div className="px-6 py-4">
                <h1 className="font-bold font-gloria text-center text-lg mb-2">{product.name}</h1>
                <p className="text-gray-700 font-baloo text-base">{product.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 font-chewy tracking-wider py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {formatCurrency(product.price)}
                </span>
                <div className="flex gap-1 justify-between mt-2 items-center mx-auto">
                    <button
                        className="bg-amber-500 text-white font-chewy tracking-wider font-light py-1 px-4 rounded hover:bg-amber-700 flex gap-1"
                        onClick={() => handlerToAdd(product)}
                    >
                        Agregar <FaShoppingCart />
                    </button>
                    <button
                        onClick={() => navigate(location.pathname + '?seeProduct=true' + `&productId=${product.id}`)}
                        className="bg-amber-500 text-white font-chewy tracking-wider font-light py-1 px-4 rounded hover:bg-amber-700 flex gap-1">
                        ver <FaEye />
                    </button>
                </div>
            </div>
        </div>
    );
}
