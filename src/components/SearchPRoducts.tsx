import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { getAllProduct } from "../api/ProductApi";
import { Link } from "react-router-dom";



export default function SearchPRoducts() {

    const [searchTerm, setSearchTerm] = useState('');
    const MAX_SEARCH = 7


    const handleSearchChange = (e: any) => {
        setSearchTerm(e.target.value);
    };

    const { data, isLoading } = useQuery({
        queryKey: ['productsSearch'],
        queryFn: getAllProduct
    })

    if (isLoading) return 'Cargando...'
    return (
        <>
            <div className="w-96 bg-gray-100 flex -mr-32 flex-col items-center justify-center border border-amber-300 rounded-2xl p-3 gap-3 hover:border-yellow-600">
                <div className="flex gap-4">

                    <IoSearchSharp size={30} />

                    <div className="w-80 mx-auto justify-center">
                        <input
                            type="text"
                            className="w-full p-2 rounded-2xl font-baloo"
                            placeholder=" ¿Que estas Buscando?"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
            </div>
            <div className=" absolute w-2/3 lg:w-1/3 bg-white rounded-2xl">
                {
                    searchTerm && data?.filter(product =>
                        product.name.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === ''
                    ).slice(0, MAX_SEARCH)
                        .map(product => (
                            <div key={product.id} className="flex flex-col justify-center z-40 items-center p-1 border-b rounded-xl border-gray-400">
                                <ul>
                                    <li className="font-baloo">
                                        <Link to={`/products?seeProduct=true&productId=${product.id}`}>
                                            {product.name}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        ))
                }
            </div>



        </>

    );
};

