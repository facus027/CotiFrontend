import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getProductsByCategory } from "../../api/ProductApi"
import CategorySidebar from "../../components/products/CategorySidebar"
import CardProduct from "../../components/products/CardProduct"


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
            <div className="flex gap-5">
                <aside className=" lg:w-72 lg:h-screen bg-white pt-4 fixed flex">
                    <CategorySidebar />
                </aside>
                <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center ml-80">
                    <h1 className="font-bold text-2xl justify-start">{data.length} Productos encontrados</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
                        {data.map(product => (
                            <CardProduct key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}
