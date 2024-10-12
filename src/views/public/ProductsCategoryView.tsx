import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getProductsByCategory } from "../../api/ProductApi"
import CategorySidebar from "../../components/products/CategorySidebar"
import CardProduct from "../../components/products/CardProduct"
import BannerAnimate from "../../components/ui/BannerAnimate"
import CategoryListBox from "../../components/products/CategoryListBox"


export default function ProductsCategoryView() {
    const params = useParams()
    const category = params.category!

    const { data, isLoading } = useQuery({
        queryKey: ['productsCategory', category],
        queryFn: () => getProductsByCategory(category),
        retry: false
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
                        <BannerAnimate title={`${data.length} Productos encontrados`} />
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
                        {data.map(product => (
                            <CardProduct key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}
