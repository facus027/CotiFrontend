import { useNavigate } from "react-router-dom";
import { ProductsDemo } from "../../types";
import { formatCurrency } from "../../util";



export default function CardProductHome({ product }: { product: ProductsDemo }) {

    const navigate = useNavigate()

    return (
        <>
            <div className="w-11/12 overflow-hidden shadow-lg bg-white p-3 rounded-lg cursor-pointer hover:scale-105 transition-transform hover:rotate-2"
                onClick={() => navigate(location.pathname + '?seeProduct=true' + `&productId=${product.id}`)}
            >
                <div className="flex flex-row ">
                    <div className=" overflow-hidden">
                        <img className="w-full h-32 bg-cover px-4 hover:scale-125 transition-transform hover:rotate-2"
                            src={product.image}
                            alt={`imagenDe${product.name}`}
                            title={product.name}
                        />
                        <div className="absolute">
                            <img className="w-32 h-14 ml-10 lg:ml-36 -mt-10"
                                alt="Logotipo CotillonSm"
                                src="https://res.cloudinary.com/dwxwejuvu/image/upload/v1720015148/aje7gfpd898we6jjj07i.png"
                                title="Logotipo CotillonSm"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-2/3 text-center">
                        <h1 className="font-bold font-gloria text-center text-lg mb-2">{product.name}</h1>
                        <p className="text-gray-700 font-baloo text-base">{product.description}</p>
                        <div className="">
                            <span className="inline-block bg-gray-200 rounded-full px-3 font-chewy tracking-wider py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                {formatCurrency(product.price)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
