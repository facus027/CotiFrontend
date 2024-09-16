import { useQuery } from "@tanstack/react-query"
import CategorySidebar from "../../components/products/CategorySidebar"
import { fetchProducts } from "../../api/ProductApi"
import CardProduct from "../../components/products/CardProduct"
import BannerAnimate from "../../components/ui/BannerAnimate"
import { useState } from "react"
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";


export default function ProductsView() {

    const [page, setPage] = useState(1);
    const pageSize = 28; // Tamaño de página fija, puede ser dinámico


    const { data, isLoading } = useQuery({
        queryKey: ['productsByPage', page],
        queryFn: () => fetchProducts(page, pageSize)
    })


    if (isLoading) return 'Cargando...'

    if (data) return (
        <>
            <div className="flex gap-5">
                <aside className=" lg:w-72 lg:h-screen bg-white pt-4 fixed flex">
                    <CategorySidebar />
                </aside>
                <div className="min-h-screen bg-gray-100 flex flex-col -mt-5 items-center justify-center ml-80">
                    <div className="w-full mb-3 -mt-10">
                        <BannerAnimate title={`${data.products.length} Productos encontrados`} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
                        {data.products.map(product => (
                            <CardProduct key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="flex gap-5 mt-10">
                        <button
                            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                            disabled={page === 1}
                        >
                            <FaCircleArrowLeft size={20} />
                        </button>
                        <span className="text-2xl font-luckiest font-extrabold text-black">{page}</span>
                        <button
                            onClick={() => setPage((prev) => prev + 1)}
                            disabled={page === data.totalPages}
                        >
                            <FaCircleArrowRight size={20} />
                        </button>
                    </div>
                </div>

            </div>

        </>
    )
}
