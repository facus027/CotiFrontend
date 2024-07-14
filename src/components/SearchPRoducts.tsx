import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { getAllProduct } from "../api/ProductApi";
import { Link } from "react-router-dom";



export default function SearchPRoducts() {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e: any) => {
        setSearchTerm(e.target.value);
    };

    const { data, isLoading } = useQuery({
        queryKey: ['productsSearch'],
        queryFn: getAllProduct
    })

    if (isLoading) return 'Cargando...'
    return (
        <div className="w-full bg-gray-100 flex items-center justify-center border border-gray-300 rounded-2xl p-3 gap-3 hover:border-black">
            <div className=" justify-center">
                <IoSearchSharp size={30} />
            </div>
            <div className="w-full mx-auto justify-center">
                <input
                    type="text"
                    className="w-full p-2 rounded-2xl"
                    placeholder="Buscar Producto"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                {
                    searchTerm && data!.map(product => ((product.name.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === '') && (
                        <ul key={product.id}>
                            <li>
                                <Link to={`/products?seeProduct=true&productId=${product.id}`}>
                                    {product.name}
                                </Link>
                            </li>
                        </ul>
                    )))
                }

            </div>
        </div>
    );
};

