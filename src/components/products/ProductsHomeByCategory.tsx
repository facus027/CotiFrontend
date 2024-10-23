import { useEffect, useState } from "react";
import CardProductHome from "./CardProductHome";
import { useQuery } from "@tanstack/react-query"
import { getProductsByCategory } from "../../api/ProductApi"

type ProductsHomeByCategoryProps = {
    cols: number,
    category: string
}

export default function ProductsHomeByCategory({ cols, category }: ProductsHomeByCategoryProps) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const productsPerPage = cols == 2 ? 6 : 4;

    const { data: productData } = useQuery({
        queryKey: ['productsHomeCategory', category],
        queryFn: () => getProductsByCategory(category),
        retry: false
    })



    const products = productData ? productData : []


    // Cambia automáticamente cada 5 segundos, avanzando de a 6 productos
    useEffect(() => {
        if (products.length === 0) return;

        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                (prevIndex + productsPerPage) % products.length
            );
        }, 5000);

        return () => clearInterval(intervalId);
    }, [products.length]);

    // Calcula el grupo de productos que se debe mostrar
    const getVisibleProducts = () => {
        if (products.length === 0) return [];

        const visibleProducts = products.slice(currentIndex, currentIndex + productsPerPage);

        // Si quedan menos de 6 productos al final de la lista, concatenamos los primeros productos para completar
        if (visibleProducts.length < productsPerPage) {
            return [...visibleProducts, ...products.slice(0, productsPerPage - visibleProducts.length)];
        }
        return visibleProducts;
    };


    return (
        <>
            <div className={`grid grid-cols-1 lg:grid-cols-${cols} m-7 gap-5`}>
                {getVisibleProducts().map(product => (
                    <CardProductHome key={product.id} product={product} />
                ))}
            </div>
        </>
    )
}
