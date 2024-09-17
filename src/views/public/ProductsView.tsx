import { useQuery } from "@tanstack/react-query"
import CategorySidebar from "../../components/products/CategorySidebar"
import CardProduct from "../../components/products/CardProduct"
import BannerAnimate from "../../components/ui/BannerAnimate"
import { fetchProducts } from "../../api/ProductApi"
import { useState } from "react"
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";
import CategoryListBox from "../../components/products/CategoryListBox"


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
            <div className="flex gap-5 flex-col lg:flex-row">
                <aside className="w-full lg:w-72 h-auto lg:h-screen hidden lg:block bg-white pt-4 lg:fixed">
                    <CategorySidebar />
                </aside>
                <div className=" lg:hidden mx-auto">
                    <CategoryListBox />
                </div>

                <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center lg:ml-80 w-full lg:w-auto">
                    <div className="w-full mb-3">
                        <BannerAnimate title={`${data.products.length} Productos encontrados`} />
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
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
